import { Component, OnInit} from '@angular/core';
import { InstagramService } from '../../services/instagram.service';
import { Feed } from '../../models/feed/feed';
import { IFeed } from '../../models/IFeed';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reel',
  standalone: false,
  templateUrl: './reel.component.html',
  styleUrl: './reel.component.css'
})
export class ReelComponent implements OnInit{
  

  constructor(private _service:InstagramService) {}
  
  feed$!: Observable<Feed>;
    
  video:IFeed[] | undefined
  

  ngOnInit(): void {

    this.feed$ = this._service.getFeeds();

  }

  
}




