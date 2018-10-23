

import { Input, Directive, HostBinding, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';
// import { KeyCodesModel } from './key-codes.model';
const enum KeyCodesModel {
  Up =  'green',
  Down = 'blue'
}

@Directive({
  selector: '[appColor]'
})
export class ColorDirective  implements OnInit {


  constructor(private element: ElementRef, private renderer: Renderer2){
  }

  @HostBinding('style.color') color: string = 'black';
  @HostListener('window:keydown', ['$event']) windowKeydown($event) {
    const key = $event.key;
    switch(key) {
      case 'ArrowUp':
        this.color = KeyCodesModel.Up;
        break;
      case 'ArrowDown':
        this.color = KeyCodesModel.Down;
        break;
      default:
        this.color = '';
        break;
    }
  }

  @HostBinding('class.rouge') isClickedClass: boolean = false;
  @Input() set appColor(isEqual: boolean) {
    this.color = ''; // Ne pas appliquer le style 'color' défini justa avant
    if (isEqual) {
      this.isClickedClass = isEqual; // appliquer class="rouge" car isEqualIndex = true
    } else {
      this.isClickedClass = false;
    }
  }

  ngOnInit() {
    let el = this.element.nativeElement;
    // el.style.cssText = "text-decoration: underline;";
    // el.setAttribute('style', 'background-color: yellow; text-transform: lowercase;');
    this.renderer.setStyle(el, 'font', 'italic bold 12px/30px Helvetica, serif');
  }


}
