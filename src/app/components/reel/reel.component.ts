import { Component, OnInit} from '@angular/core';
import { InstagramService } from '../../services/instagram.service';
import { Feed } from '../../models/feed/feed';
import { IFeed } from '../../models/IFeed';

@Component({
  selector: 'app-reel',
  standalone: false,
  templateUrl: './reel.component.html',
  styleUrl: './reel.component.css'
})
export class ReelComponent implements OnInit{
  

  constructor(private _service:InstagramService) {}
  
  feed:Feed | undefined;
    
  video:IFeed[] | undefined
  

  ngOnInit(): void {
    this._service.getFeeds().subscribe((data:Feed) => {

      data.posts.forEach(post => {
     
        if(post.mediaType == "VIDEO"){
            this.video?.push({
              caption: post.prunedCaption,
              medialUrl: post.mediaUrl,
              data: post.timestamp
            })
        }
      });        

    });

    console.log("Video x:"+this.video?.length);

  }

  
}




