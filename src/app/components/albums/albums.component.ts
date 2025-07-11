import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../shared/store/Global/App.state';
import { selectToken } from '../../shared/store/Login/login.selectors';
import { loadalbums } from '../../shared/store/Albums/albums.actions';
import { Observable } from 'rxjs';
import { IAlbumFoto } from '../../models/IAlbumFoto';
import { getalbumslist } from '../../shared/store/Albums/albums.selectors';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { refreshtoken } from '../../shared/store/Login/login.actions';

@Component({
  selector: 'app-albums',
  standalone: false,
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
 
  branca:string = "";
  anno : string = "";
  brancaSelected : string | null  = "";
  albums$ = new Observable<IAlbumFoto[]> ();
  
  constructor(private _store: Store<AppStateModel>, private _router: ActivatedRoute ){
    
  }
 
  ngOnInit(): void {
   console.log("onInit")
   console.log("onInit albums")
    
     this.selectAlbums();

    this._router.params.subscribe((p) =>{
      var branca = p["branca"];
       if(branca!="" && 
            (branca=="lc" || branca=="eg" || branca=="rs" || branca=="varie")
          ){
            this.loadAlbums(branca);
          }
    }); 
     

  }
 
 
   
  onAnnoChange(event: any) {
    /*
    let anno:string = this.anno;
    let branca:string = this.brancaSelected;
    console.log(anno+"_"+anno.length);
    
        
    if(branca!=""){
      if(anno.length==4 || anno== ""){
        
          
          this.loadAlbums(branca, anno);
         
      }
    }*/
  }
   

  changeBranca(event: any):void{
   
  
    
  }

  loadAlbums(branca:string){
   
    this._store.select(selectToken).subscribe((data) =>{
   
      if(data){
           console.log("load data")
        this._store.dispatch(loadalbums({branca: branca, anno: "0", token:data}));
         
         
       
      }else{
        console.log("refreshtoken")
        this._store.dispatch(refreshtoken())
      }

    }); 

  }

  selectAlbums(){
     this.albums$ = this._store.select(getalbumslist);
  }

  
}
