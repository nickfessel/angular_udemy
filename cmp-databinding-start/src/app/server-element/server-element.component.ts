import { ContentChild, ViewChild, Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // makes any styles in server-element.component.css global (application-wide)
  //encapsulation: ViewEncapsulation.None
  // uses ShadowDom. Not supported in every browser.
  //encapsulation: ViewEncapsulation.ShadowDom
  encapsulation: ViewEncapsulation.Emulated  // the standard (default) value
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // @Input allows parent component to access this component's element using property binding, i.e. [element]='serverElement' (see app.component.html).
  // 'srvElement' is the custom name that you could assign for the parent element access, i.e. [srvElement]='serverElement' (see app.component.html)
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild("heading", {static: true}) header: ElementRef;
  @ContentChild("contentParagraph", {static: true}) paragraph: ElementRef;

  constructor() { 
    console.log("constructor called!");

  }

  ngOnInit(): void {
    console.log("ngOnInit called!");
    console.log("Text content: " + this.header.nativeElement.textContent);
    console.log("Text content of paragraph:" + this.paragraph.nativeElement.textContent );
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck called!")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!");
    console.log("Text content of paragraph:" + this.paragraph.nativeElement.textContent );
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
    console.log("Text content: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }
}
