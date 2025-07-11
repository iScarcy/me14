import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../shared/store/Global/App.state';
import { selectToken } from '../../shared/store/Login/login.selectors';
import { loadalbums } from '../../shared/store/Albums/albums.actions';
import { Observable } from 'rxjs';
import { IAlbumFoto } from '../../models/IAlbumFoto';
import { getalbumslist } from '../../shared/store/Albums/albums.selectors';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
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
  
  constructor(private _store: Store<AppStateModel>, private _router: Router){
    
  }
 
  ngOnInit(): void {
   console.log("onInit")
   console.log("onInit albums")
    
     this.selectAlbums();

     this._router.events.subscribe((event) => {

      let branca:string = "";
      
      
      if (event instanceof NavigationStart) {
        branca = event.url.replace("/gallery/","");
        if(branca!="" && 
            (branca=="lc" || branca=="eg" || branca=="rs" || branca=="varie")
          ){
            this.loadAlbums(branca);
          }

        
        console.log("nav start:"+ branca);
      }
      else  if (event instanceof NavigationEnd) {
        console.log("nav end:");
        
        
        
      }
      else  if (event instanceof NavigationError) {
        console.log("nav err:"+ branca);
      }
     });

   /*this._router.events.subscribe((event) => {
      console.log("onInit albums")
         if(this.brancaSelected!=null && 
            (this.brancaSelected=="lc" || this.brancaSelected=="eg" || this.brancaSelected=="rs" || this.brancaSelected=="varie")
          ){
            this.loadAlbums(this.brancaSelected);
          }
          
      if (event instanceof NavigationStart) {
        // Navigation is starting... show a loading spinner perhaps?
        // blog on that here: ultimatecourses.com/blog/angular-loading-spinners-with-router-events
           console.log("start_")
           debugger;
           this.brancaSelected = event.url.replace("/gallery/","");
          
      
         
      }
      if (event instanceof NavigationEnd) {
        // We've finished navigating
         debugger;
     
         this.selectAlbums();
      }
      if (event instanceof NavigationError) {
        // something went wrong, log the error
          console.log(event.error);
      }
    });
    */
   
    /*
    switch(branca){
      case "lc":  this.branca = "L/C";
                  break;
      case "eg":  this.branca = "E/G";
                  break;
      case "rs": this.branca = "R/S";
                  break;            
      case "varie": this.branca = "Gruppo";
                  break;            
    }
    
    this.loadAlbums(branca);
    */
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
