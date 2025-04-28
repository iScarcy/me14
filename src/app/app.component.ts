import { Component } from '@angular/core';
import { AppStateModel } from './shared/store/Global/App.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(){}

  title = 'me14';
 
}
