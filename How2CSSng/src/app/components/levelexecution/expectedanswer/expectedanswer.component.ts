import { identifierModuleUrl } from '@angular/compiler';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-expectedanswer',
  templateUrl: './expectedanswer.component.html',
  styleUrls: ['./expectedanswer.component.css']
})
export class ExpectedanswerComponent implements OnInit {
  @Input() htmlText = "";
  @Input() cssText = "";

  public doc: Document | undefined;
  public computedAnswerStyle: any = undefined;

  public children?: HTMLCollection;

  initStyles: CSSStyleDeclaration[] = [];
  changedStyles: CSSStyleDeclaration[] = [];
  isFirstTime = true;

  diffKeys: any;
  diffCount = 0;

  constructor() { }

  ngOnInit(): void {
    var frame = document.getElementById('frame2') as HTMLFrameElement;
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

    

    if(this.doc && this.isFirstTime){
      this.addElementChildrenStyles(this.doc.body, this.initStyles);
      this.isFirstTime = false;
    }
    console.log(this.initStyles);
    
    
    var styleEl = this.doc?.getElementById('style');
    if(styleEl){
      console.log(styleEl.innerHTML);
      styleEl.innerHTML = this.cssText;
      console.log(styleEl.innerHTML);
    }

    if(this.doc){
      this.changedStyles = [];
      this.addElementChildrenStyles(this.doc.body, this.changedStyles);
    }

    //console.log(this.changedStyles);
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

          this.calculateDiffKeys();
        }
      }
    }
  }

  calculateDiffKeys(){
    this.diffKeys = [];
    this.diffCount = 0;
    for(var i = 0; i < this.changedStyles.length; i++){
      var keys: any[] = [];
      Object.keys(this.changedStyles[i]).forEach(key => {
        if(this.changedStyles[i][key as any] != this.initStyles[i][key as any]){
          keys.push(key);
        }
      });
      this.diffKeys.push(keys);
      this.diffCount += keys.length;
    }
    console.log(this.diffCount);
  }

  copy(src: any) {
    return Object.assign({}, src);
  }
}
