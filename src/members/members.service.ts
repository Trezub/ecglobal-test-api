import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MembersService {
    constructor(private prisma: PrismaService) {}

    async getAll() {
        return this.prisma.member.findMany({
            orderBy: {
                name: 'asc',
            },
        });
    }
}
