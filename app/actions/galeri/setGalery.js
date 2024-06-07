"use server";
import prisma from "@/lib/prismadb";

export default async function setGalery(data) {
  try {
    const promises = data.map((element) =>
      prisma.galery.create({
        data: {
          imageid: element.imageid,
          imageurl: element.imageurl,
        },
      })
    );

    await Promise.all(promises);

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
