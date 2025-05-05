 
import { LOAD_ALBUM_FOTO, LOAD_ALBUMS, LOAD_LAST_ALBUMS, loadalbumfotosuccess, loadalbums, loadalbumssuccess, loadlastalbumssuccess } from "./albums.actions";
import { exhaustMap, map, merge, mergeAll, mergeMap } from "rxjs";
import { inject, Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { IGetAlbumFotoRequestModel, IGetAlbumsStoreRequest, IGetLastAlbumsStoreRequest} from "./albums.model";
import { IAlbumFoto } from "../../../models/IAlbumFoto";
import { baseGalleryPublicImageUrl } from "../../../app.constant";
import { GalleryService } from "../../../services/gallery.service"; 
@Injectable()
export class AlbumEffects {
  
  private action$ = inject(Actions)
  
  
  effects$ = createEffect(() =>
    
    this.action$.pipe(
      ofType(LOAD_ALBUMS),
      exhaustMap((action:IGetAlbumsStoreRequest) => {
        
        return this.galleryService.getAlbums(action.branca, action.anno, action.token).pipe(
          map((data) => {
           
            return loadalbumssuccess({ albums: data });
          })
        );
      })
    )
  );
 
  effectsLastAlbums$ = createEffect(() =>
    
    this.action$.pipe(
      ofType(LOAD_LAST_ALBUMS),
      exhaustMap((action:IGetLastAlbumsStoreRequest) => {
        
        return this.galleryService.getLastAlbums(action.maxAlbum, action.token).pipe(
          map((data) => {
           
            return loadlastalbumssuccess({ lastalbums : data });
          })
        );
      })
    )
  );


  effectsFoto$ = createEffect(() =>
    this.action$.pipe(
      ofType(LOAD_ALBUM_FOTO),
      exhaustMap((action: IGetAlbumFotoRequestModel) => {
        return this.galleryService
          .getFoto(action.branca, action.album, action.token) 
          .pipe(
            map((album) => {
            
              var albumFoto: IAlbumFoto = {
                id: album.id,
                title: album.title,
                anno: album.anno,
                branca: album.branca,
                folder: album.folder,
                imgFolderUrl: baseGalleryPublicImageUrl + album.imgFolderUrl,
                foto: album.foto
              }
              return loadalbumfotosuccess({ album: albumFoto });
            })
          );
      })
    )
  );
 
 
  
  constructor(
    private galleryService: GalleryService   
  ) {}
}