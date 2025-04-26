import { IAlbumFoto } from "../../../models/IAlbumFoto"

 
export interface IAlbumsModel{
    albums:IAlbumFoto[]
}

export interface IStoreModel{
    data: IAlbumsModel,
    type: string
}

/*ALBUM*/ 

export interface IGetAlbumsRequestModel{
    branca:string
}

export interface IGetAlbumsStoreRequest extends IStoreRequest{
    branca:string, anno:string, token:string
}

 
//FOTO

export interface IGetAlbumFotoRequestModel  extends IStoreRequest{
    idAlbum:number,
    token:string
}

 
//COMMON

export interface IStoreRequest{
    type:string
}