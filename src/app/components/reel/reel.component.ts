import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-reel',
  standalone: false,
  templateUrl: './reel.component.html',
  styleUrl: './reel.component.css'
})
export class ReelComponent implements OnInit{
  
    constructor(private renderer: Renderer2) {}
    
    posts: string[] = [
    
     'https://www.instagram.com/p/DK-DBwPqCYw/embed/',  
     'https://www.instagram.com/reel/DKU5Ho3q1eF/embed/'  
     
  ];

  test:string = ''


  ngOnInit(): void {
    this.loadInstagramScript().then(() => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    });
  }

    private loadInstagramScript(): Promise<void> {
    return new Promise((resolve) => {
      const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
      if (!existingScript) {
        const script = this.renderer.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        script.onload = () => resolve();
        this.renderer.appendChild(document.body, script);
      } else {
        resolve();
      }
    });
  }
 

}
