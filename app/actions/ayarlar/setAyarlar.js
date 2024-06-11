"use server";
import prisma from "@/lib/prismadb";

export default async function setAyarlar(data) {
  try {
    const ayar = await prisma.ayarlar.findFirst();

    let image1 = ayar?.banner1?.image;
    if (data.banner1.image === null) {
      data.banner1.image = image1;
    }
    let image2 = ayar?.banner2?.image;
    if (data.banner2.image === null) {
      data.banner2.image = image2;
    }
    let image3 = ayar?.banner3?.image;
    if (data.banner3.image === null) {
      data.banner3.image = image3;
    }
    await prisma.Ayarlar.update({
      where: {
        id: 1,
      },
      data: {
        banner1: data.banner1,
        banner2: data.banner2,
        banner3: data.banner3,
      },
    });

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
