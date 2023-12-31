import { Logger } from '@nestjs/common';
import {
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ServerToClientEvents } from 'src/types/events';
import { ChatGatewayService } from './chat.service';
import { channelInfo } from 'src/types/channelInfo.entity';
import { MessageInfo } from 'src/types/message.info';
import { ChannelService } from './channel.service';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';

export interface joinChannelInfo {
    name: string;
    pass: string;
}

@WebSocketGateway({ cors: '*' })
class ChatGateway
    implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
    public username = null;
    public socket_arr: Socket[] = [];
    private readonly logger = new Logger(ChatGateway.name);
    constructor(
        private readonly chatService: ChatGatewayService,
        private readonly channelService: ChannelService,
        private readonly userService: UserService,
        private prisma: PrismaService
    ) {}
    @WebSocketServer() io: Server<any, ServerToClientEvents>;
    afterInit() {
        // this.logger.log('Websocket Initialized\n');
    }
    async handleConnection(client: any, ...args: any[]) {
        if (client.handshake.query.username !== 'null') {
            this.username = client.handshake.query.username;
            await this.chatService.new_cli(
                client,
                client.handshake.query.username
            );
            await this.userService.changeStatus(client.id, 'online', this.io);
//            await this.channelService.responsePendingRequest(
 //               client,
  //              client.handshake.query.username
   //         );
        }
        this.socket_arr[client.id] = client;
        this.logger.log(
            `Client ${client.id} ${client.handshake.query.username} arrived`
        );
        client.emit('connection');
    }
    handleDisconnect(client: any) {
        //Remove the client.id and the username
        client.emit('disconnection');
        this.userService.changeStatus(client.id, 'offline', this.io);
        this.logger.log(`Client ${client.id} left`);
    }
    @SubscribeMessage('message')
    async handleEvent(client: any, data: MessageInfo): Promise<void> {
        const newMsg = await this.chatService.createMessage(client.id, data);
        if (data.ToUser && newMsg) {
            this.chatService.sendToUser(this.io, newMsg, client.id);
        } else if (newMsg != null) {
            this.channelService.sendToChannel(
                this.io,
                newMsg,
                client.id,
                data.target
            );
        }
        // this.logger.log(newMsg);
        //		this.chatService.sendMessage(this.io, message_obj);
    }

    @SubscribeMessage('JoinChannel')
    async handleChannelJoining(client: any, data: joinChannelInfo): Promise<void> {
        await this.channelService.newChannelMember(this.io, client, data);
    }

    @SubscribeMessage('ChannelMessage')
    handleChannelMessage(client: any, data: string[]): void {
        this.channelService.sendToChannel(this.io, data[0], data[1], client.id);
    }
    @SubscribeMessage('ChannelCreation')
    async handleChannelCreation(client: any, data: channelInfo): Promise<void> {
        await this.channelService.channelCreation(this.io, data, client.id, client);
    }

    @SubscribeMessage('ChannelInvitResponse')
    handleChannelInvitResponse(client: any, data: any) {
        this.channelService.channelInviteResponse(client, data);
    }

    @SubscribeMessage('ChannelInvitation')
    handleChannelInvitation(client: any, data: any) {
        this.channelService.inviteToChannel(this.io, client, data);
    }

    @SubscribeMessage('userLeavingChannel')
    handleUserLeavingchannel(client: any, data: any): void {
        this.channelService.leaveChannel(this.io, client, data);
    }
    @SubscribeMessage('friendsRequest')
    handleFriendsRequest(client: any, target: string): void {
        this.chatService.requestFriends(this.io, client.id, target);
    }
    @SubscribeMessage('SudoUser')
    handleSudoUser(client: any, data: any) {
        this.channelService.sudoUser(this.io, data.targetId, data.channelName);
    }

    @SubscribeMessage('MuteUser')
    handleMuteRequest(client: any, data: any) {
        this.channelService.muteUser(client, data.targetId, data.channelName, this.io);
    }

    @SubscribeMessage('UnmuteUser')
    async handleUnMuteRequest(client: any, data: any) {
        const channel = await this.prisma.channel.findUnique({
            where: {
                name: data.channelName,
            },
            include: {
                info: true,
            },
        });
        if (channel) {
            const moderation = channel.info;
            if (moderation) {
                moderation.map((elem) => {
                    if (elem.type == 'mute' && elem.targetId == data.targetId) {
                        this.channelService.unMute(
                            data.targetId,
                            channel,
                            elem.id,
							this.io
                        );
                    }
                });
            }
        }
    }

    @SubscribeMessage('KickUser')
    handleKickRequest(client: any, data: any) {
        this.channelService.KickUser(
            this.io,
            data.targetId,
            data.channelName,
            this.socket_arr
        );
    }

    @SubscribeMessage('BanUser')
    handleBanRequest(client: any, data: any) {
        this.channelService.BanUser(this.io, data.targetId, data.channelName);
    }

    @SubscribeMessage('UnbanUser')
    handleUnBanRequest(client: any, data: any) {
        this.channelService.unBan(data.targetId, data.channelName, this.io);
    }
	
	@SubscribeMessage("deleteChannel")
	handleDeleteChannel(client: any, data: any) {
		this.channelService.deleteChannel(this.io, client, data.channelName);
		this.io.in('channelName').socketsLeave('channelName');
	}
}

export default ChatGateway;
