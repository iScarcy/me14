import { Component } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { YoutubeSearchListResponse } from '../../models/video/YoutubeSearchListResponse';

@Component({
  selector: 'app-video',
  standalone: false,
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {

   response: YoutubeSearchListResponse | undefined;

  constructor(private service: VideoService) {}

  ngOnInit() {
    this.service.getVideos().subscribe((data: YoutubeSearchListResponse) => {
      data
      this.response = data;
    });
 
  }

  getEmbedUrl(videoId: string) {
    return `https://www.youtube.com/embed/${videoId}`;
  }

}
