"use server";
import prisma from "@/lib/prismadb";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export default async function setAyarlar(data) {
  try {
    const ayar = await prisma.ayarlar.findFirst();

    let image1 = ayar?.banner1?.image;
    if (data.banner1.image === null) {
      data.banner1.image = image1;
    } else {
      await cloudinary.uploader.destroy(image1.imageid);
    }
    let image2 = ayar?.banner2?.image;
    if (data.banner2.image === null) {
      data.banner2.image = image2;
    } else {
      await cloudinary.uploader.destroy(image2.imageid);
    }
    let image3 = ayar?.banner3?.image;
    if (data.banner3.image === null) {
      data.banner3.image = image3;
    } else {
      await cloudinary.uploader.destroy(image3.imageid);
    }
    let image4 = ayar?.banner4?.image;
    if (data.banner4.image === null) {
      data.banner4.image = image4;
    } else {
      await cloudinary.uploader.destroy(image4.imageid);
    }
    let image5 = ayar?.banner5?.image;
    if (data.banner5.image === null) {
      data.banner5.image = image5;
    } else {
      await cloudinary.uploader.destroy(image5.imageid);
    }
    let image6 = ayar?.banner6?.image;
    if (data.banner6.image === null) {
      data.banner6.image = image6;
    } else {
      await cloudinary.uploader.destroy(image6.imageid);
    }
    let image7 = ayar?.banner7?.image;
    if (data.banner7.image === null) {
      data.banner7.image = image7;
    } else {
      await cloudinary.uploader.destroy(image7.imageid);
    }
    let image8 = ayar?.banner8?.image;
    if (data.banner8.image === null) {
      data.banner8.image = image8;
    } else {
      await cloudinary.uploader.destroy(image8.imageid);
    }
    await prisma.Ayarlar.update({
      where: {
        id: 1,
      },
      data: {
        banner1: data.banner1,
        banner2: data.banner2,
        banner3: data.banner3,
        banner4: data.banner4,
        banner5: data.banner5,
        banner6: data.banner6,
        banner7: data.banner7,
        banner8: data.banner8,
      },
    });

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
