import { Post } from "./post";

export class Feed {
  username!: string;
  biography!: string;
  profilePictureUrl!: string;
  website!: string | null;
  followersCount!: number;
  followsCount!: number;
  posts!: Post[];
}


