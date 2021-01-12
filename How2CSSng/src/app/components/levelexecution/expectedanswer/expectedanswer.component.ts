import { Component, Input, OnInit } from '@angular/core';

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
}
