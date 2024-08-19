import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    await prisma.member.create({
        data: {
            avatar: 'https://github.com/trezub.png',
            name: 'Adriano Trezub Déa',
            posts: {
                createMany: {
                    data: [
                        {
                            createdAt: '2024-02-05T12:31:01.000Z',
                            content:
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsum nihil accusantium, repellendus, sed sint laudantium modi doloremque architecto dolores optio voluptas! Hic voluptas porro est cum. Et, architecto corrupti.\nMinima et soluta corrupti veniam cumque laboriosam iure voluptates saepe, eum, nam tempora aliquam atque tenetur ratione! Labore blanditiis nam fugit necessitatibus quis, ex repellat amet doloremque! Tenetur, neque voluptatibus?',
                        },
                        {
                            createdAt: '2024-02-09T12:31:01.000Z',
                            content:
                                'ipsam eos, est facilis corporis quasi earum dolorum tempora enim deleniti cumque iure nemo ratione porro impedit repellat',
                        },
                        {
                            createdAt: '2024-02-05T12:31:01.000Z',
                            content: 'Post teste',
                        },
                        {
                            createdAt: '2024-03-21T15:19:15.000Z',
                            content:
                                'Atque, numquam odit. Nam exercitationem amet obcaecati culpa earum quisquam incidunt itaque facere facilis',
                        },
                        {
                            createdAt: '2024-05-30T10:18:18.000Z',
                            content:
                                'Alaudantium ut ad eius nisi consequuntur, fugit dolorem. Cumque quam dolores nam ipsa placeat, expedita vel tempora',
                        },
                        {
                            createdAt: '2024-06-02T06:58:46.000Z',
                            content:
                                'Nam exercitationem amet obcaecati culpa earum quisquam incidunt itaque facere facilis',
                        },
                    ],
                },
            },
        },
    });
    await prisma.member.create({
        data: {
            avatar: 'https://fastly.picsum.photos/id/7/200/200.jpg?hmac=kyLHvcA0xBicwnbvMLsMv9-F52HjjrMfzsCFwR_i4B4',
            name: 'Naki',
            posts: {
                createMany: {
                    data: [
                        {
                            createdAt: '2024-02-05T12:31:01.000Z',
                            content:
                                'Lorem ipsum dolor sit amet consectetur chitecto dolores optio volupti veniam cumque laboriosam iure voluptates satenetur ratione! Labore blanditiis nam fugit necessitatibus quis, ex repellat amet doloremque! Tenetur, neque voluptatibus?',
                        },
                        {
                            createdAt: '2024-02-09T12:31:01.000Z',
                            content:
                                'ipsam eos, est facilis empora enim deleniti cumque iure nemo ratione porro impedit repellat',
                        },
                        {
                            createdAt: '2024-03-21T15:19:15.000Z',
                            content:
                                'Atque, caecati culpa earum quisquam incidunt itaque facere facilis',
                        },
                        {
                            createdAt: '2024-05-30T10:18:18.000Z',
                            content:
                                'Alaudantisequuntur, fugit dolorem. Cumque quam dolores nam ipsa placeat, expedita vel tempora',
                        },
                        {
                            createdAt: '2024-06-02T06:58:46.000Z',
                            content:
                                'Nam exercitatincidunt itaque facere facilis',
                        },
                    ],
                },
            },
        },
    });
    await prisma.member.create({
        data: {
            avatar: 'https://fastly.picsum.photos/id/581/200/200.jpg?hmac=l2PTQyeWhW42zIrR020S5LHZ2yrX63cSOgZqpeWM0BA',
            name: 'Eltya',
            posts: {
                createMany: {
                    data: [
                        {
                            createdAt: '2024-02-05T12:31:01.000Z',
                            content:
                                'Lorem ipsum dolor sit lit. Suscipcto corrupti.\nMinima et soluta corrupti veniam cumque ex repellat amet doloremque! Tenetur, neque voluptatibus?',
                        },
                        {
                            createdAt: '2024-02-09T12:31:01.000Z',
                            content:
                                'ipsam eos, est facilis corpim deleniti cumque iure nemo ratione porro impedit repellat',
                        },
                        {
                            createdAt: '2024-03-21T15:19:15.000Z',
                            content:
                                'Atque, numquam odit. Nam exercitatarum incidunt itaque facere facilis',
                        },
                        {
                            createdAt: '2024-05-30T10:18:18.000Z',
                            content:
                                'Alaudantium ut ad eius nisi consquam dolores nam ipsa placeat, expedita vel tempora',
                        },
                    ],
                },
            },
        },
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
