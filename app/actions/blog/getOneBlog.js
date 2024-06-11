"use server";
import prisma from "@/lib/prismadb";

export default async function getOneBlog(slug) {
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        slug: slug,
      },
    });

    return blog;
  } catch (error) {
    throw new Error(error);
  }
}
