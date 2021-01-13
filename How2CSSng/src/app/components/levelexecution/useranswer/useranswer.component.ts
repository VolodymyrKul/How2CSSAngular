import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-useranswer',
  templateUrl: './useranswer.component.html',
  styleUrls: ['./useranswer.component.css']
})
export class UseranswerComponent implements OnInit {
  @Input() htmlText = "";
  @Input() cssText = "";

  public doc: Document | undefined;
  public computedAnswerStyle: any = undefined;

  changedStyles: CSSStyleDeclaration[] = [];

  constructor() { }

  ngOnInit(): void {
    var frame = document.getElementById('frame') as HTMLFrameElement;
    this.doc = frame.contentWindow?.document;
    this.doc?.open();
    this.doc?.write(this.htmlText);
    this.doc?.close();
    var styleEl = this.doc?.createElement('style');
    if(styleEl){
      styleEl.id = "style";
      styleEl.innerHTML = this.cssText;
      this.doc?.head.append(styleEl);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.doc)
      this.doc.body.innerHTML = this.htmlText;

    var styleEl = this.doc?.getElementById('style');
    if(styleEl){
      styleEl.innerHTML = this.cssText;
    }

    if(this.doc){
      this.changedStyles = [];
      this.addElementChildrenStyles(this.doc.body, this.changedStyles);
    }
  }

  addElementChildrenStyles(elem: Element, styles: CSSStyleDeclaration[]){
    if(elem.childElementCount == 0)
      return;
    var children = elem.children
    if(children){
      for(var i = 0; i < children.length; i++){
        var element = children.item(i);
        if(element){
          var style = window.getComputedStyle(element);
          styles.push(this.copy(style) as CSSStyleDeclaration);
          this.addElementChildrenStyles(element, styles);
        }
      }
    }
  }

  copy(src: any) {
    return Object.assign({}, src);
  }
}
