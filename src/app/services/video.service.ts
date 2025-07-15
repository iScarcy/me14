import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
 
  private apiKey = 'AIzaSyAjf_5VuxKnZuBEl6XyU4A6jF9555jin7Y';
  private channelId = '@agescimessina14';
  private apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&channelId=${this.channelId}&part=snippet,id&order=date&maxResults=10`;

  constructor(private _http: HttpClient) {}

  getLatestVideos() {
    return this._http.get<any>(this.apiUrl);
  }
}
