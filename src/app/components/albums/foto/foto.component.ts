import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStateModel } from '../../../shared/store/Global/App.state';
import { Store } from '@ngrx/store';
import { selectToken } from '../../../shared/store/Login/login.selectors';
import { loadalbumfoto } from '../../../shared/store/Albums/albums.actions';

@Component({
  selector: 'app-foto',
  standalone: false,
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.css'
})
export class FotoComponent implements OnInit{
  
  branca:string | null = "";
  album:string  | null = "";

  constructor(private _store: Store<AppStateModel>, private route: ActivatedRoute){}
  
  ngOnInit(): void {
   
    this.branca = this.route.snapshot.paramMap.get('branca');
    this.album = this.route.snapshot.paramMap.get('album');
    if(this.branca != null && this.album != null){

         this._store.select(selectToken).subscribe((data) =>{
              
        if(data){
        
          this._store.dispatch(loadalbumfoto({branca: this.branca!, album : this.album!, token:data}));
            
         // this.albums$ = this._store.select(getalbumslist);
        } 
  
      }); 

    }
  }

}
