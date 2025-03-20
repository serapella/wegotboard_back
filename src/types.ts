export interface NewsFeed {
  items: NewsFeedItem[];
  image: string;
  title: string;
  description: string;
  pubDate: string;
  webMaster: string;
  link: string;
  language: string;
  lastBuildDate: string;
  backdrop: string;
}

export interface NewsFeedItem {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  "dc:creator": string;
  guid: string;
  isoDate: Date;
}
