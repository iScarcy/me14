import { Component, Input } from '@angular/core';
import { IAlbumFoto } from '../../../models/IAlbumFoto';

@Component({
  selector: 'app-thumbnail',
  standalone: false,
  templateUrl: './thumbnail.component.html',
  styleUrl: './thumbnail.component.css'
})
export class ThumbnailComponent {

  @Input() album:IAlbumFoto = {
    id: 0,
    title: '',
    anno: 0,
    branca: "",
    folder:"",
    imgFolderUrl: '',
    foto: []
  };

  
  constructor(){

  }
  
  
}
