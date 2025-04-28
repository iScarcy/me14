import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateModel } from "../Global/App.state";
 

const getalbumsstate = createFeatureSelector<AppStateModel>("albums");

 
export const getalbumslist = createSelector(getalbumsstate, (state) => {
    
    return state.albums;
})
 
export const getalbum = (idAlbum:number) => createSelector(getalbumslist, (albums) => {
   
    return albums.find(album => album.id == idAlbum);
})
 