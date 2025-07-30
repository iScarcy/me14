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

  currentIndex: number = 0

  getCurrentSlideUrl(): string {
    if(this.slides.length>0){
      
        return `url('${this.slides[this.currentIndex].url}')`
      }
    else  
      return '';
  }

  goToPrev():void{
    
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slides.length -1 : this.currentIndex - 1
    this.currentIndex = newIndex;
  }

  goToNext():void{
      
      const isLastSlide = this.currentIndex === this.slides.length -1;
      const newIndex:number = isLastSlide ? 0 : this.currentIndex + 1;
      this.currentIndex = newIndex;
  }
}
