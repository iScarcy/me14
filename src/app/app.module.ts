import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';  
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { MatCarouselModule } from 'ng-mat-carousel';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,  
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
