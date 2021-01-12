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
    var styleEl = this.doc?.getElementById('style');
    if(styleEl){
      styleEl.innerHTML = this.cssText;
    }
    //this.computedAnswerStyle = window.getComputedStyle(this.bodyElem.firstElementChild)
  }
}
