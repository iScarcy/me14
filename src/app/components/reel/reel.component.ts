import { Component, Input, OnInit} from '@angular/core';
import { InstagramService } from '../../services/instagram.service';
import { Feed } from '../../models/feed/feed';
 
import { Observable } from 'rxjs';
import { ISlide } from '../../models/ISlide';
import { PostChild } from '../../models/feed/post';
import { Carousel } from '../../models/feed/carousel';
import { VideoFeed } from '../../models/feed/videofeed';

@Component({
  selector: 'app-reel',
  standalone: false,
  templateUrl: './reel.component.html',
  styleUrl: './reel.component.css'
})
export class ReelComponent implements OnInit{
  
  @Input() pageCaller:string = ""

  constructor(private _service:InstagramService) {}
  
  carousels:Carousel[] = []; 
  video:VideoFeed[] = []


  ngOnInit(): void {

    this._service.getFeeds().subscribe((data)=>{
        data.posts.forEach(x => {
         
        switch(x.mediaType)
        {
            case "CAROUSEL_ALBUM":
                  let carousel:Carousel = {
                    foto: this.getSlide(x.children) ,
                    caption: x.caption,
                    data: x.timestamp
                  }   
                  this.carousels.push(carousel);
                  break;
            case "VIDEO":
                  let video_p:VideoFeed = {
                    url: x.mediaUrl,
                    width: x.sizes.medium.width,
                    height: x.sizes.medium.height,
                    caption: x.caption,
                    data: x.timestamp
                  }
                  this.video.push(video_p);
                  break;
        }


        });
    })

  }

  getSlide(pc:PostChild[]|undefined): ISlide[] {
      let slide_arr:ISlide[] = [];
      let maxFoto:number = 2
      let count:number = 0
 
      if(pc!=undefined)
      {
        pc.forEach(x => {
          
              let slide:ISlide = {
                url: x.sizes.medium.mediaUrl,
                title: ''
              }
              
                  slide_arr.push(slide);
              
              
            
        });
      }
      return slide_arr;
  }
  
}




