import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseGalleryApiUrl, baseGalleryPublicImageUrl } from '../app.constant';
import { map, Observable } from 'rxjs';
import { IAlbumFoto } from '../models/IAlbumFoto';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private _httpEvents: HttpClient) { }

  getAlbums(branca: string , anno: string , token: string):Observable<IAlbumFoto[]>{
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
   
     var url: string = `${baseGalleryApiUrl}album/${branca}/${anno}`;
      return this._httpEvents.get<Array<IAlbumFoto>>(url, {headers:headers}).pipe(
        map(albums => albums.map(album => ({
          id: album.id,
          title: album.title,
          anno: album.anno,
          branca: album.branca, 
          folder: album.folder,
          imgFolderUrl:  baseGalleryPublicImageUrl + album.imgFolderUrl ,            
          foto: []
        })))
      );
    }
  
   
  
    getLastAlbums(maxAlbum: number , token: string):Observable<IAlbumFoto[]>{
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  
     var url: string = `${baseGalleryApiUrl}album/last/${maxAlbum}`;
    
      return this._httpEvents.get<Array<IAlbumFoto>>(url, {headers:headers}).pipe(
        map(albums => albums.map(album => ({
          id: album.id,
          title: album.title,
          anno: album.anno,
          branca: album.branca, 
          folder: album.folder,
          imgFolderUrl:  baseGalleryPublicImageUrl + album.imgFolderUrl ,            
          foto: []
        })))
      );
    }
  
   
    
  getFoto(branca:string, album:string , token: string):Observable<IAlbumFoto>{
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
   
 
    var url: string = `${baseGalleryApiUrl}album/${branca}/${album}/photo`;
    return this._httpEvents.get<IAlbumFoto>(url, {headers:headers}).pipe(
      map(album => ({
        id: album.id,
        title: album.title,
        anno: album.anno,
        branca: album.branca, 
        folder: album.folder,
        imgFolderUrl: baseGalleryPublicImageUrl + album.imgFolderUrl,       
        foto: album.foto
      }))
     )
  }

    
}
