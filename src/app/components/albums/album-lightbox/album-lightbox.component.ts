import { Component, Inject, OnInit } from '@angular/core';
import { IAlbumFotoDialogData } from '../../../models/IAlbumFotoDialogData';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-album-lightbox',
  standalone: false,
  templateUrl: './album-lightbox.component.html',
  styleUrl: './album-lightbox.component.css'
})
export class AlbumLightboxComponent implements OnInit{
 
  img:string | undefined = ""
 
  indexFoto : number | undefined
  totFoto : number = 0
  constructor(@Inject(MAT_DIALOG_DATA) public data: IAlbumFotoDialogData){
    
  }
  ngOnInit(): void {
    
    let id : number = this.data.idFoto; 
    this.totFoto = this.data.galleryData.length;
    this.indexFoto  = this.data.galleryData.find(x => x.id == id)?.index
    
    this.img =  this.data.galleryData.find(x => x.id == id)?.img
   
  }
  
  next(){
    if(this.indexFoto! < this.totFoto)
        this.indexFoto = this.indexFoto! + 1

    this.img =  this.data.galleryData.find(x => x.index == this.indexFoto)?.img

  }

  previous(){
    if(this.indexFoto!>0)
      this.indexFoto = this.indexFoto! - 1

    this.img =  this.data.galleryData.find(x => x.index == this.indexFoto)?.img
  }


}
