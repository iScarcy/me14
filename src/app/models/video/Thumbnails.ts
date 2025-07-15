export class Thumbnails {
  default!: Thumbnail;
  medium!: Thumbnail;
  high!: Thumbnail;
}

export class Thumbnail {
  url!: string;
  width!: number;
  height!: number;
}