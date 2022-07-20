import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    const res = await prisma.youtube_channels.updateMany({
      where: {id: {equals: 1}},
      data: {
        subscribers: 500
      }
    });
  } 
  catch (error) {
    console.log(error);
  }
  finally {
    await prisma.$disconnect();
  }
}

main();