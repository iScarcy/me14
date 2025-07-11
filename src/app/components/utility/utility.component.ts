import { Component,  OnInit} from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { IUtility } from '../../services/rest/IUtility';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
 
 
 

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css'],
   standalone: false,
})
export class UtilityComponent implements OnInit{
 
  utility:IUtility[] = [];

  constructor(private _service:UtilityService,  private _router: ActivatedRoute){

   

  }
  


  ngOnInit(): void {
    this._router.params.subscribe((p) =>{
      var type = p["type"];
      this._service.getUtility(type).subscribe((data) => {this.utility = data.sort((a, b) => a.typeID - b.typeID);});
    }); 
    /*
     this._router.events.subscribe((event) => {
            
            if (event instanceof NavigationStart) {
            
        
              console.log("utility start:"+ event.url);

              var type:string =  event.url.replace("/utility/","");
              this._service.getUtility(type).subscribe((data) => {this.utility = data.sort((a, b) => a.typeID - b.typeID);});
            }
            else  if (event instanceof NavigationEnd) {
              console.log("utility end:");
              
              
              
            }
            else  if (event instanceof NavigationError) {
              console.log("utility err:" );
            }
            else{
              console.log(event.type);
              console.log(event.toString());
            }  

     });
    */
  }






}
