import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YoutubeSearchListResponse } from '../models/video/YoutubeSearchListResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
 
  private apiKey = 'AIzaSyAjf_5VuxKnZuBEl6XyU4A6jF9555jin7Y';
  private channelId = 'UCghIatysBcuAq9eWDHfwNzA';
  private apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&channelId=${this.channelId}&part=snippet,id&order=date&maxResults=100`;

  constructor(private _http: HttpClient) {}

  getVideos():Observable<YoutubeSearchListResponse> {
    return this._http.get<YoutubeSearchListResponse>(this.apiUrl);
  }
}
