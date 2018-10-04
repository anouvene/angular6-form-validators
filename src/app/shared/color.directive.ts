

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

  @HostBinding('style.color') color: string = 'grey';


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
        this.color = 'black';
        break;
    }
  }

  @Input() set appColor(isEqualIndex: boolean) {
    if (isEqualIndex) {
      this.isClickedClass = isEqualIndex;
    } else {
      this.isClickedClass = false;
    }
  }

  @HostBinding('class.rouge') isClickedClass: boolean = false;

  ngOnInit() {
    let el = this.element.nativeElement;
    el.style.cssText = "text-decoration: underline;";
    el.setAttribute('style', 'background-color: yellow; text-transform: lowercase;');
    this.renderer.setStyle(el, 'font', 'italic bold 12px/30px Helvetica, serif');
  }


}
