import { Component, Input } from '@angular/core';
import { ISlide } from '../../models/ISlide';

@Component({
  selector: 'app-image-slider',
  standalone: false,
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {

  @Input() slides: ISlide[] = [];

  currentIndex: number = 1

  getCurrentSlideUrl(): string {
    if(this.slides.length>0){
       
        return `url('${this.slides[this.currentIndex].url}')`
      }
    else  
      return '';
  }
}
