"use server";
import prisma from "@/lib/prismadb";

export default async function delGalery(data) {
  try {
    const { v2: cloudinary } = await import("cloudinary");

    cloudinary.config({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    await cloudinary.uploader.destroy(data.imageid);
    await prisma.galery.delete({
      where: { id: data.id },
    });

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
