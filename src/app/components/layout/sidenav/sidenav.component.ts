import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ISlide } from '../../../models/ISlide';
import { baseHomePagePublicImageUrl} from '../../../app.constant';

@Component({
  selector: 'app-sidenav',
  standalone: false,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit{
[x: string]: any;
  
 
  
  constructor(private router:Router, private _breackpointObserver: BreakpointObserver){}

  @ViewChild(MatDrawer)
  drawer!: MatDrawer;

  isHandset$: Observable<boolean> | undefined;
 
 logo : string = baseHomePagePublicImageUrl + "me14.png";

  ngOnInit(): void {
    
     this.router.events.subscribe(() =>{
          this.drawer.close();
     });
     
     this.isHandset$ = this._breackpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );

  }
}
