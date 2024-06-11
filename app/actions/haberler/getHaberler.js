"use server";

import axios from "axios";
import * as cheerio from "cheerio";
export default async function getHaberler() {
  try {
    const response = await axios.get(
      "https://www.bogazici.k12.tr/haberler?cat=1"
    );
    const html = response.data;

    const data = [];
    // Cheerio kullanarak HTML'i yükle
    const $ = cheerio.load(html);

    $("article.pbmit-blog-style-1").each((index, element) => {
      const text = $(element).find("div.pbminfotech-box-desc p").text();

      const imgSrc = $(element)
        .find("div.pbmit-featured-wrapper img")
        .attr("src");

      const linkElement = $(element).find("a.stretched-link");
      const title = linkElement.attr("title");
      const href = linkElement.attr("href");

      data.push({ img: imgSrc, title: title, href: href, text, text });
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
