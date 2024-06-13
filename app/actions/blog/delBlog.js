"use server";
import prisma from "@/lib/prismadb";

export default async function delBlog(data) {
  try {
    const { v2: cloudinary } = await import("cloudinary");

    cloudinary.config({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    for (const item of data.images) {
      await cloudinary.uploader.destroy(item.imageid);
    }
    await prisma.blog.delete({
      where: { id: data.id },
    });

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
