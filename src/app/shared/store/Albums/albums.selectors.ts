import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateModel } from "../Global/App.state";
import { IAlbumsModel } from "./albums.model";
 

const getalbumsstate = createFeatureSelector<IAlbumsModel>("albums");

 
export const getalbumslist = createSelector(getalbumsstate, (state) => {
    
    return state.albums;
})

export const getlastalbumslist = createSelector(getalbumsstate, (state) => {
    
    return state.lastAlbums;
})
 

export const getalbum = (idAlbum:number) => createSelector(getalbumslist, (albums) => {
   
    return albums.find(album => album.id == idAlbum );
})

export const getalbumfoto = (albumfolder:string) => createSelector(getalbumslist, (albums) => {
   
    return albums.find(album => album.folder == albumfolder );
})

