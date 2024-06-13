"use server";
import prisma from "@/lib/prismadb";
import slugify from "slugify";

export default async function setBlog(data) {
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
        slug: slug,
      },
    });

    if (blogs) return { message: "Bu Blogdan aynısından var " };

    await prisma.blog.create({
      data: {
        name: data.name,
        slug: slug,
        index: parseInt(data.index),
        images: data.images,
        quill: data.quill,
      },
    });

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
