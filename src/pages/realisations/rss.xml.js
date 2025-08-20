import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import info from "@/config/info.json";

export async function GET(context) {
  const posts = await getCollection("realisations");

  return rss({
    title: `Réalisations professionnelles de ${info.name} en BTS SIO`,
    description: info.description,
    site: context.site,
    items: posts.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      author: info.name,
      link: `/realisations/${item.id}`,
    })),
  });
}
