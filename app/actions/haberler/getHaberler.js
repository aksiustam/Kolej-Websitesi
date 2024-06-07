"use server";

import axios from "axios";
import * as cheerio from "cheerio";
export default async function getHaberler() {
  try {
    const response = await axios.get(
      "https://www.hurriyet.com.tr/haberleri/okul-oncesi"
    );
    const html = response.data;

    const data = [];
    // Cheerio kullanarak HTML'i yükle
    const $ = cheerio.load(html);
    const divsWithClass = $("div.tag__list__item");

    // Her bir div öğesinin metnini al ve bir diziye ekle
    divsWithClass.each((index, element) => {
      const aTag = $(element).find("a.tag__list__item--cover");
      if (aTag.length > 0) {
        const href = "https://www.hurriyet.com.tr" + aTag.attr("href");
        const title = aTag.attr("title");
        const img = aTag.find("img");
        const imgSrc = img.attr("data-src");
        const h3Text = $(element).find("h3").text().trim();
        const pText = $(element).find("p").text().trim();

        data.push({
          id: index,
          href: href,
          title: title,
          imgurl: imgSrc,
          h3: h3Text,
          p: pText,
        });
      }
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
