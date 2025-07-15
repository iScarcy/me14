import { Thumbnails } from "./Thumbnails";

export class Item {
  kind!: string;
  etag!: string;
  id!: Id;
  snippet!: Snippet;
}

export class Snippet {
  publishedAt!: string;
  channelId!: string;
  title!: string;
  description!: string;
  thumbnails!: Thumbnails;
  channelTitle!: string;
  liveBroadcastContent!: string;
  publishTime!: string;
}

export class Id {
  kind!: string;
  videoId!: string;
}