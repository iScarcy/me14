import { Component,   Input, OnInit  } from '@angular/core';
import { IUtility } from '../../../services/rest/IUtility';
import { baseUtilityPublicImageUrl } from '../../../app.constant';
 

@Component({
  selector: 'app-utility-item',
  templateUrl: './utility-item.component.html',
  styleUrls: ['./utility-item.component.css'],
  standalone: false
})
export class UtilityItemComponent implements OnInit {
    
  @Input() item:IUtility = {
    id: 0,
    name: '',
    fileFullPath: '',
    typeID: 0,
    type: ''
  }

  
  ngOnInit(): void {
      console.log(this.item.name);
  }

  
  itemImage(typeID:number):string{
    let img:string = "";
    switch(typeID){
      case 1: img="documenti-83x83.jpg" ;
              break;
      case 2: img="tracce-83x83.jpg" ;
              break;
    }
    return baseUtilityPublicImageUrl + img;
  }
}
