import { Component, Input } from '@angular/core';
import { IAlbumFoto } from '../../../models/IAlbumFoto';

@Component({
  selector: 'app-album',
  standalone: false,
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {

  @Input() album:IAlbumFoto = {
    id: 0,
    title: '',
    anno: 0,
    branca: "",
    imgFolderUrl: '',
    foto: []
  };

  
  constructor(){

  }

}
