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
export class FotoComponent {
  


}
