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
    console.log(`New Connection Sokcet" ${client.handshake.query.username}`);
    if (client.handshake.query.username !== 'null') {
      this.username = client.handshake.query.username;
      this.chatService.new_cli(client, client.handshake.query.username);
    }
    this.logger.log(
      `Client ${client.id} ${client.handshake.query.username} arrived`,
    );
  }
  handleDisconnect(client: any) {
    //Remove the client.id and the username
    this.logger.log(`Client ${client.id} left`);
  }
  @SubscribeMessage('message')
  async handleEvent(client: any, data: string[]): Promise<void> {
    this.logger.log(`Message : ${data[0]} from : ${client.id} to: ${data[1]}`);
    const newMsg = this.chatService.createMessage(client.id, data[0], data[1]);
    this.chatService.sendTo(this.io, await newMsg, client.id);
    //		this.chatService.sendMessage(this.io, message_obj);
  }

  @SubscribeMessage('JoinChannel')
  handleChannelJoining(client: any, data: string): void {
    //   this.chatService.newMember(client, data);
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
}

export default ChatGateway;
