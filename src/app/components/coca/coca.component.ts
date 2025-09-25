import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ICapo } from '../../models/users/ICapo';

@Component({
  selector: 'app-coca',
  standalone: false,
  templateUrl: './coca.component.html',
  styleUrl: './coca.component.css'
})
export class CocaComponent  implements OnInit {

   constructor(private service: UsersService) {}

    staffLC: ICapo[] | undefined;
    staffRS: ICapo[] | undefined;
    staffEG: ICapo[] | undefined;
    
    ngOnInit() {
      this.service.getCoCa().subscribe((data) => {
        this.staffLC = data.filter(c => c.branca.toLowerCase() === 'lc');
        this.staffEG = data.filter(c => c.branca.toLowerCase() === 'eg');      
        this.staffRS = data.filter(c => c.branca.toLowerCase() === 'rs');
        console.log(this.staffLC);
      });
   
    }
}
