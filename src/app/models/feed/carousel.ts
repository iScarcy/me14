import { IFeed } from "../IFeed";
import { ISlide } from "../ISlide";

export interface Carousel extends IFeed{
    foto:ISlide[]
}