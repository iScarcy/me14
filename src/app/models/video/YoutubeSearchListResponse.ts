import { Item } from "./Item";
import { PageInfo } from "./PageInfo";

export class YoutubeSearchListResponse {
  kind!: string;
  etag!: string;
  nextPageToken!: string;
  regionCode!: string;
  pageInfo!: PageInfo;
  items!: Item[];
}
