import { IAlbumFoto } from "../../../models/IAlbumFoto"

 
export interface IAlbumsModel{
    albums:IAlbumFoto[],
    lastAlbums:IAlbumFoto[]
}

export interface IStoreModel{
    data: IAlbumsModel,
    type: string
}

/*ALBUM*/ 

export interface IGetAlbumsStoreRequest extends IStoreRequest{
    branca:string, anno:string, token:string
}

export interface IGetLastAlbumsStoreRequest extends IStoreRequest{
    maxAlbum:number, token:string
}

 
//FOTO

export interface IGetAlbumFotoRequestModel  extends IStoreRequest{
    branca:string,
    album:string,
    token:string
}

 
//COMMON

export interface IStoreRequest{
    type:string
}