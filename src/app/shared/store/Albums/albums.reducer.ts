import { createReducer, on } from "@ngrx/store";
import {  loadalbumfotosuccess, loadalbumssuccess, loadlastalbumssuccess } from "./albums.actions";
import { initialState } from "./albums.state";
import { IAlbumFoto } from "../../../models/IAlbumFoto";
import { IFoto } from "../../../models/IFoto";

const _albumsReducer = createReducer(
    initialState,
  
    on(loadalbumssuccess, (state,action)=>{
       
        return {
            albums: action.albums,
            lastAlbums: state.lastAlbums
        }
    }),
    
    on(loadlastalbumssuccess, (state,action)=>{
       
        return {
            albums: state.albums,
            lastAlbums: action.lastalbums
        }
    }),
  
    on(loadalbumfotosuccess, (state,action)=>{
      
       var albumsFoto = [...state.albums];
       var item =  albumsFoto.find(item => item.id == action.album.id)!;
       var album : IAlbumFoto = {
           id: item.id,
           title: item.title,
           anno: item.anno,
           branca: item.branca,
           imgFolderUrl: item.imgFolderUrl,
           foto: []
       } 
       
        action.album.foto.forEach(element => {
            const ph:IFoto = {
                id: element.id,
                albumID: element.albumID,
                file: element.file,
                thumbPathFile: element.thumbPathFile +  "?t="+ Math.random() ,
                fullPathFile: element.fullPathFile
            }
            
            album.foto.push(ph);
        }); 
        let index = albumsFoto.indexOf(item)
        
        albumsFoto[index] = album;
                
        return {
            albums: albumsFoto,
            lastAlbums: state.lastAlbums
        }
    }),

   
)

export function albumsReducer(state: any, action: any) {
    return _albumsReducer(state, action);
  }
 
 