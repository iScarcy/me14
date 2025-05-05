import { Component, OnInit } from '@angular/core';
import { AppStateModel } from '../../../shared/store/Global/App.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAlbumFoto } from '../../../models/IAlbumFoto';
import { selectToken } from '../../../shared/store/Login/login.selectors';
import { loadlastalbums } from '../../../shared/store/Albums/albums.actions';

@Component({
  selector: 'app-main-content',
  standalone: false,
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit{
  
  lastAlbums$ = new Observable<IAlbumFoto[]>();

  constructor(private _store: Store<AppStateModel>){}

  ngOnInit(): void {
    
      this._store.select(selectToken).subscribe((data) =>{
          
          this.getLastAlbums(data);
    
        }); 
    
  }

  getLastAlbums(token:string){

    this._store.dispatch(loadlastalbums({maxAlbum:5, token:token}));
  }

}
