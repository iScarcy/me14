import { Component, Input, OnInit } from '@angular/core';
import { IAlbumFoto } from '../../../models/IAlbumFoto';
import { AppStateModel } from '../../../shared/store/Global/App.state';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { selectToken } from '../../../shared/store/Login/login.selectors';
import { loadalbumfoto } from '../../../shared/store/Albums/albums.actions';
import { map, Observable } from 'rxjs';
import { getalbumfoto } from '../../../shared/store/Albums/albums.selectors';
import { IFoto } from '../../../models/IFoto';
import { IAlbumLightboxData } from '../../../models/IAlbumLightboxData';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AlbumLightboxComponent } from '../album-lightbox/album-lightbox.component';
 

@Component({
  selector: 'app-album',
  standalone: false,
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent implements OnInit {

  branca:string | null = "";
  album:string  | null = "";
  album$ = new Observable<IAlbumFoto | undefined> ();
  galleryData : IAlbumLightboxData[]  = [ ]
  galleryDataNumElement:number | undefined = 0;
  constructor(private _store: Store<AppStateModel>, private route: ActivatedRoute, private _dialog: MatDialog){}
  
  ngOnInit(): void {
   
    this.branca = this.route.snapshot.paramMap.get('branca');
    this.album = this.route.snapshot.paramMap.get('album');
    if(this.branca != null && this.album != null){

         this._store.select(selectToken).subscribe((data) =>{
              
        if(data){
        
          this._store.dispatch(loadalbumfoto({branca: this.branca!, album : this.album!, token:data}));
            
          this.album$ = this._store.select(getalbumfoto(this.album!));

          this.album$.subscribe(
            (data) => {
              data?.foto.forEach((foto,index) => {
                let item:IAlbumLightboxData = {
                  id: foto.id,
                  img: foto.fullPathFile,
                  index: index
                }           
              
                this.galleryData?.push(item);
              }) 
            }
          )
       
        } 
  
      }); 

    }
  }

 clickFotoListener(id:number){


  let config: MatDialogConfig = {
    panelClass: "dialog-responsive",
    disableClose: false,
  
    data: {galleryData: this.galleryData, idFoto: id}
    
  }
  
  let dialogRed = this._dialog.open(AlbumLightboxComponent, config)

}

}
