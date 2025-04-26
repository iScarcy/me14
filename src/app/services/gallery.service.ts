import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseGalleryApiUrl, baseGalleryPublicImageUrl } from '../app.constant';
import { map, Observable } from 'rxjs';
import { IAlbumFoto } from '../models/IAlbumFoto';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpEvents: HttpClient) { }

  getAlbums(branca: string , anno: string , token: string):Observable<IAlbumFoto[]>{
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  
     var url: string = baseGalleryApiUrl+"album/"+branca+"/"+anno;
    
      return this.httpEvents.get<Array<IAlbumFoto>>(url, {headers:headers}).pipe(
        map(albums => albums.map(album => ({
          id: album.id,
          title: album.title,
          anno: album.anno,
          branca: album.branca, 
          imgFolderUrl:  baseGalleryPublicImageUrl + album.imgFolderUrl ,            
          foto: []
        })))
      );
    }
  
    
  getFoto(idAlbum:number , token: string):Observable<IAlbumFoto>{
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
   

    var url: string = baseGalleryApiUrl+"album/photo/"+idAlbum;
    return this.httpEvents.get<IAlbumFoto>(url, {headers:headers}).pipe(
      map(album => ({
        id: album.id,
        title: album.title,
        anno: album.anno,
        branca: album.branca, 
        folder: '',
        imgFolderUrl: baseGalleryPublicImageUrl + album.imgFolderUrl,       
        foto: album.foto
      }))
     )
  }

    
}
