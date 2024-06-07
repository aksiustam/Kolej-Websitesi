"use server";
import prisma from "@/lib/prismadb";

export default async function getBlog() {
  try {
    const blog = await prisma.blog.findMany({
      orderBy: {
        index: "asc",
      },
    });

    return blog;
  } catch (error) {
    throw new Error(error);
  }
}
