"use server";
import prisma from "@/lib/prismadb";
import slugify from "slugify";

export default async function updateBlog(data) {
  try {
    const CharacterMap = {
      Ç: "C",
      Ş: "S",
      Ğ: "G",
      İ: "I",
      Ö: "O",
      Ü: "U",
      ç: "c",
      ş: "s",
      ğ: "g",
      ı: "i",
      ö: "o",
      ü: "u",
    };

    const slug = slugify(data.name, {
      lower: true,
      replacement: (char) => CharacterMap[char] || (char === " " ? "" : char),
      remove: /[*+~.()'"!:@]/g,
    });

    const blogs = await prisma.blog.findFirst({
      where: {
        id: data.id,
      },
    });

    let formData = {
      name: data.name,
      slug: slug,
      index: parseInt(data.index),
      quill: data.quill,
      images: blogs.images,
    };
    if (data.images !== null) {
      const { v2: cloudinary } = await import("cloudinary");

      cloudinary.config({
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });
      for (const item of formData.images) {
        await cloudinary.uploader.destroy(item.imageid);
      }
      formData.images = data.images;
    }

    await prisma.blog.update({
      where: { id: data.id },
      data: formData,
    });

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
