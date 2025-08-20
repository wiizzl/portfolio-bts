import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import veille from "@/config/veille.json";

export async function GET(context) {
  const posts = await getCollection("veille");

  return rss({
    title: `Veille technologique sur ${veille.theme}`,
    description: veille.description,
    site: context.site,
    items: posts.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      author: item.data.author,
      link: `/veille/${item.id}`,
    })),
  });
}
