import { createAction, props } from "@ngrx/store"
import { IAlbumFoto } from "../../../models/IAlbumFoto"

export const LOAD_ALBUMS = '[Gallery page] load albums'
export const LOAD_ALBUMS_SUCCESS = '[Gallery page] load albums success'

export const LOAD_LAST_ALBUMS = '[Home page] load last albums'
export const LOAD_LAST_ALBUMS_SUCCESS = '[Home page] load last albums success'


export const LOAD_ALBUM_FOTO = '[Gallery page] load foto albums'
export const LOAD_ALBUM_FOTO_SUCCESS = '[Gallery page] load foto albums success'


//IGetAlbumsRequestModel
export const loadalbums=createAction(LOAD_ALBUMS, props<{branca:string, anno:string, token:string }>());
export const loadalbumssuccess=createAction(LOAD_ALBUMS_SUCCESS, props<{albums:IAlbumFoto[]}>());

export const loadlastalbums=createAction(LOAD_LAST_ALBUMS, props<{maxAlbum:number, token:string }>());
export const loadlastalbumssuccess=createAction(LOAD_LAST_ALBUMS_SUCCESS, props<{lastalbums:IAlbumFoto[]}>());

//IGetAlbumFotoRequestModel
export const loadalbumfoto=createAction(LOAD_ALBUM_FOTO, props<{idAlbum:number, token:string}>())
export const loadalbumfotosuccess=createAction(LOAD_ALBUM_FOTO_SUCCESS, props<{album: IAlbumFoto}>())

