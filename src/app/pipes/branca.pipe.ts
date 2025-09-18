import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'branca',
  standalone: false
})
export class BrancaPipe implements PipeTransform {

  transform(branca:string | null): string  {
    switch(branca){
      case "lc": return "Lupetti e Coccinelle";
      case "eg": return "Guide ed Esploratori"
      case "rs": return "Rover e Scolte";
      case "varie": return "Gruppo";
      default: return "";
    }
  }

}
