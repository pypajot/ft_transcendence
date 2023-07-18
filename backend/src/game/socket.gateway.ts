import { WebSocketGateway, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class SocketGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(client: any, message: string): void {
    this.server.emit('message', `Server received: ${message}`);
    console.log(`Server received: ${message}`);
  }
}