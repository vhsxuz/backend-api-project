import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    const data = [
      {name: 'Andreas Alexander', description: 'frontend tutorials', link: 'https://youtube.com/channel/andreas-alexander', subscribers: 100},
      {name: 'Christopher Alexander', description: 'backend tutorials', link: 'https://youtube.com/channel/christopher-alexander', subscribers: 150},
      {name: 'Harjanto Widodo', description: 'fullstack tutorials', link: 'https://youtube.com/channel/harjanto-widodo', subscribers: 200}
    ];
    
    const res = await prisma.youtube_channels.createMany({
      data,
      skipDuplicates: true,
    });

    console.log(res);

  } 
  catch (error) {
    console.log(error);
  }
  finally {
    async () => {
      await prisma.$disconnect();
    }
  }
}

main();