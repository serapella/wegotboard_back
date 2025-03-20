import { Request, Response } from "express";
import Parser from "rss-parser";
import { Error as MongooseError } from "mongoose";
const { ValidationError } = MongooseError;

export const getNews = async (req: Request, res: Response) => {
  try {
    const parser = new Parser();
    const rss = await parser.parseURL("https://boardgamegeek.com/rss/blog/1");
    const news = rss.items
      .sort(
        (item1, item2) =>
          Date.parse(item2.pubDate as string) -
          Date.parse(item1.pubDate as string)
      )
      .slice(0, 5)
      .map((item) => ({
        ...item,
        content: undefined,
        contentSnippet: undefined,
      }));

    res.status(200).json(news);
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.message });
    } else if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};
