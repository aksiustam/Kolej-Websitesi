"use server";
import prisma from "@/lib/prismadb";

export default async function setAyarlar(data) {
  try {
    await prisma.Ayarlar.update({
      where: {
        id: 1,
      },
      data: {
        bannerid: data.imageid,
        bannerurl: data.imageurl,
      },
    });

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
