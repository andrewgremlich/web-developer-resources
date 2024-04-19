import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

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
    return await prisma.resource.findFirst({
      where: {
        url,
      },
    });
  } catch (err) {
    console.error(err);
  }
}
