import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feed } from '../models/feed/feed';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private _http: HttpClient) { }

  getFeeds():Observable<Feed>{
    let url:string = "https://feeds.behold.so/QUWzf09pSk9AyMZPmLcA";
    return this._http.get<Feed>(url);
  }
}
