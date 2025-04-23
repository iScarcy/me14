import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit{

  @Output() toogleSidenav = new EventEmitter<void>();

  constructor( ){}

  
  ngOnInit(): void {
    
  }

}
