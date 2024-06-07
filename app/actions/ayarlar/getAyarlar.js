"use server";
import prisma from "@/lib/prismadb";

export default async function getAyarlar() {
  try {
    const ayar = await prisma.ayarlar.findFirst();

    return ayar;
  } catch (error) {
    throw new Error(error);
  }
}
