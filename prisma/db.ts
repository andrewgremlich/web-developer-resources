import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function CreateResource({
  name,
  url,
  description,
}: {
  name: string;
  url: string;
  description?: string;
}) {
  try {
    return await prisma.resource.create({
      data: {
        name,
        url,
        description,
      },
    });
  } catch (err) {
    console.error(err);
  }
}

export async function GetResourceByUrl(url: string) {
  try {
    return await prisma.resource.findUnique({
      where: {
        url,
      },
    });
  } catch (err) {
    console.error(err);
  }
}

export async function GetResources() {
  try {
    return await prisma.resource.findMany();
  } catch (err) {
    console.error(err);
  }
}

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
