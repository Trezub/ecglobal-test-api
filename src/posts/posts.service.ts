import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) {}

    async getAll() {
        return this.prisma.post.findMany({
            include: {
                author: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
}
