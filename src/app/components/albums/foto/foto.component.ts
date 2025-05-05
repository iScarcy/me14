import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStateModel } from '../../../shared/store/Global/App.state';
import { Store } from '@ngrx/store';

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

      

    }
  }

}
