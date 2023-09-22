import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ServerToClientEvents } from 'src/types/events';
import { ChatGatewayService } from './chat.service';
import { channelInfo } from 'src/types/channelInfo.entity';
import { MessageInfo } from 'src/types/message.info';

export interface joinChannelInfo {
  name: string;
  pass: string;
}

@WebSocketGateway({ cors: '*' })
class ChatGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  public id = 0;
  public id_msg = 0;
  public username = null;
  private readonly logger = new Logger(ChatGateway.name);
  constructor(private readonly chatService: ChatGatewayService) {}
  @WebSocketServer() io: Server<any, ServerToClientEvents>;
  afterInit() {
    this.logger.log('Websocket Initialized\n');
  }
  async handleConnection(client: any, ...args: any[]) {
    console.log(`New Connection Socket" ${client.handshake.query.username}`);
    if (client.handshake.query.username !== 'null') {
      this.username = client.handshake.query.username;
      this.chatService.new_cli(client, client.handshake.query.username);
    }
    this.logger.log(
      `Client ${client.id} ${client.handshake.query.username} arrived`,
    );
    client.emit('connection');
  }
  handleDisconnect(client: any) {
    //Remove the client.id and the username
    this.logger.log(`Client ${client.id} left`);
    client.emit('disconnection');
  }
  @SubscribeMessage('message')
  async handleEvent(client: any, data: MessageInfo): Promise<void> {
    const newMsg = this.chatService.createMessage(client.id, data);
    if (data.ToUser) {
      this.chatService.sendToUser(this.io, await newMsg, client.id);
    } else {
      client.join(data.target);
      this.chatService.sendToChannel(
        this.io,
        await newMsg,
        client.id,
        data.target,
      );
    }
    //		this.chatService.sendMessage(this.io, message_obj);
  }

  @SubscribeMessage('JoinChannel')
  handleChannelJoining(client: any, data: joinChannelInfo): void {
    console.log(data);
    this.chatService.newMember(this.io, client, data);
  }

  @SubscribeMessage('ChannelMessage')
  handleChannelMessage(client: any, data: string[]): void {
    console.log(`${data[0]}, ${data[1]}`);
    this.chatService.sendToChannel(this.io, data[0], data[1], client.id);
  }
  @SubscribeMessage('ChannelCreation')
  handleChannelCreation(client: any, data: channelInfo): void {
    this.chatService.channelCreation(this.io, data, client.id, client);
  }

  @SubscribeMessage('ChannelInvitResponse')
  handleChannelInvitResponse(client: any, data: any) {
    this.chatService.channelInviteResponse(client, data);
  }
  @SubscribeMessage('ChannelInvitation')
  handleChannelInvitation(client: any, data: any) {
    this.chatService.inviteToChannel(this.io, client, data);
  }

  @SubscribeMessage('userLeavingChannel')
  handleUserLeavingchannel(client: any, data: any): void {
    this.chatService.leaveChannel(client, data);
  }
  @SubscribeMessage('friendsRequest')
  handleFriendsRequest(client: any, target: string): void {
    this.chatService.requestFriends(this.io, client.id, target);
  }
}

export default ChatGateway;
