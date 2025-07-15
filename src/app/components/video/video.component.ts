import { Component } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video',
  standalone: false,
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {

   videos: string[] = [];

  constructor(private service: VideoService) {}

  ngOnInit() {
    this.service.getLatestVideos().subscribe((data: any) => {
      this.videos = data.items
        .filter((item: any) => item.id.kind === 'youtube#video')
        .map((item: any) => item.id.videoId);
    });
    debugger;
  }

  getEmbedUrl(videoId: string) {
    return `https://www.youtube.com/embed/${videoId}`;
  }

}
