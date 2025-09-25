import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICapo } from '../models/users/ICapo';
import { baseUsersApiUrl } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private _http: HttpClient) {}

  getCoCa():Observable<ICapo[]> {

    var url = baseUsersApiUrl + "CoCa";
    return this._http.get<ICapo[]>(url);
  }
}
