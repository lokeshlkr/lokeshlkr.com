import { Component, ElementRef } from '@angular/core';
/** 
    This component uses some predefined classnames as selector.  
    It assumes that class is written first in the class list.  
    Example:  
    `<icon class="cat other classes"></icon>` ✅

    `<icon class="other classes cat"></icon>` ❌
    
*/
@Component({
  selector: 'icon.kit, icon.cat',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styles: ``,
  host: {
    "class": ""
  }
})
export class IconComponent {
  icon: string;
  constructor(private er: ElementRef) {

    /**
     * If you apply any host classes here then they will appear first.
     * So you have to change the indexing value below from `0` to how so ever many classes 
     * you will add in the host binding.
     */
    let classes = er.nativeElement.classList;
    this.icon = classes[0];
  }
}
