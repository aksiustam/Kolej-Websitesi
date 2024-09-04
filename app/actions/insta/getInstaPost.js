"use server";

import prisma from "@/lib/prismadb";
import axios from "axios";

export default async function getInstaPost() {
  try {
    const ayar = await prisma.ayarlar.findFirst();
    console.log(ayar);
    const later = ayar.InstaExpDate;
    const now = new Date();

    let oldtoken = ayar.InstaToken;
    if (now > later) {
      // LOGİN ET
      const baseUrl = "https://graph.instagram.com/refresh_access_token";
      const params = new URLSearchParams();
      params.append("grant_type", "ig_refresh_token");
      params.append("access_token", oldtoken);

      const urlWithParams = new URL(baseUrl);
      urlWithParams.search = params;

      const sendres = await fetch(urlWithParams, {
        method: "GET",
      });
      const response = await sendres.json();
      const token = response.access_token;
      const expsec = response.expires_in;
      oldtoken = token;
      const threeDaysInSeconds = 3 * 24 * 60 * 60;
      const nowInSeconds = Math.floor(Date.now() / 1000);
      const expTime = new Date(
        (nowInSeconds + expsec - threeDaysInSeconds) * 1000
      );
      await prisma.Ayarlar.update({
        where: {
          id: 1,
        },
        data: {
          InstaToken: token,
          InstaExpDate: expTime,
        },
      });
    }
    const fetchurl = `https://graph.instagram.com/v20.0/7669204796504727/media?access_token=${oldtoken}&fields=media_url,permalink,caption,media_type`;

    const response = await axios.get(fetchurl);
    const data = response.data;

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
