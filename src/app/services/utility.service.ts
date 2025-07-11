import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
 
import { map, Observable } from 'rxjs';
import { IUtility } from './rest/IUtility';
import { baseUtilityApiUrl } from '../app.constant';
 
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

    constructor(private httpEvents: HttpClient) { }

    getUtility(type:string):Observable<IUtility[]>{

      var url = baseUtilityApiUrl+type;
     
       return this.httpEvents.get<Array<IUtility>>(url).pipe(
            map(utility => utility.map(item => ({
                  id:item.id,
                  name:item.name,
                  fileFullPath:item.fileFullPath,
                  typeID:item.typeID,
                  type:item.type
            })))
          );
    }

}
