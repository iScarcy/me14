import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list'
 
import {MatCardModule} from '@angular/material/card';
import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
 
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    
  ]
})
export class MaterialModule { }
