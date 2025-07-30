import { IFeed } from "../IFeed";

export interface VideoFeed extends IFeed{
    url:string,
    width:number,
    height:number
}