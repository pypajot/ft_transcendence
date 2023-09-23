import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Server } from 'socket.io';
import { Client_elem } from 'src/types/client.entity';
import { User } from 'src/types/interfacesList';

Injectable();
export class UtilsService {
    prisma = new PrismaClient();

    async findUsernameFromId(id: number) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: id,
                },
            });
            return user.username;
        } catch (error) {
            console.log(error);
        }
    }
    async findIdFromSocketId(socket_id: string) {
        try {
            const user = await this.prisma.user.findMany({
                where: {
                    socketId: socket_id,
                },
            });
            if (user) {
                return user.map((value) => {
                    return value.id;
                });
            }
            return -1;
        } catch (error) {
            console.log(error);
        }
    }

    async getSocketIdFromId(id: number) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: id,
                },
            });
            if (user) {
                return user.socketId;
            }
            return '';
        } catch (error) {
            console.log(error);
        }
    }

    findUserById(
        client_id: string,
        cli_arr: Client_elem[]
    ): Client_elem | undefined {
        return cli_arr.find((cli_arr) => cli_arr.socket_id === client_id);
    }

    getChannelMember(channel: any) {
        let users: User[] = [];

        if (channel.members) {
            for (let i = 0; i < channel.members.length; i++) {
                const user: User = {
                    id: channel.members[i].id,
                    username: channel.members[i].username,
                    avatar: channel.members[i].avatar,
                    socketId: channel.members[i].socketId,
                    twoFactorAuthActive: channel.members[i].twoFactorAuthActive,
                };
                users = [...users, user];
            }
        }
        return users;
    }
}
