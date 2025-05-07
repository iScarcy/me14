import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStateModel } from '../../../shared/store/Global/App.state';
import { Store } from '@ngrx/store';
import { selectToken } from '../../../shared/store/Login/login.selectors';
import { loadalbumfoto } from '../../../shared/store/Albums/albums.actions';
import { IFoto } from '../../../models/IFoto';

@Component({
  selector: 'app-foto',
  standalone: false,
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.css'
})


export class FotoComponent  implements OnInit{
  ngOnInit(): void {
   
  }
  
  @Input() foto: string | undefined;
  @Input() id: number | undefined

  @Output() public fotoClickEmitter:EventEmitter<number> = new EventEmitter();
  
  fotoclick(){
    this.fotoClickEmitter.emit(this.id);
  }
}
