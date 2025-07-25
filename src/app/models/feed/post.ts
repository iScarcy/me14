export class Post {
  id!: string;
  timestamp!: string;
  permalink!: string;
  mediaType!: string;
  isReel?: boolean; // non sempre presente
  mediaUrl!: string;
  thumbnailUrl?: string; // solo per VIDEO
  sizes!: Sizes;
  caption!: string;
  prunedCaption!: string;
  hashtags!: string[];
  children?: PostChild[]; // solo per CAROUSEL_ALBUM
}

export class Sizes {
  small!: Size;
  medium!: Size;
  large!: Size;
  full!: Size;
}

export class Size {
  mediaUrl!: string;
  height!: number;
  width!: number;
}

export class PostChild {
  id!: string;
  mediaType!: string;
  mediaUrl!: string;
  sizes!: Sizes;
}