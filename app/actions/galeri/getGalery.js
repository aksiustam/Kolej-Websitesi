"use server";
import prisma from "@/lib/prismadb";

export default async function getGalery() {
  try {
    const galeri = await prisma.galery.findMany();

    return galeri;
  } catch (error) {
    throw new Error(error);
  }
}
