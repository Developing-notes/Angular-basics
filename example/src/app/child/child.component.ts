import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // parent to child
  @Input() list = '';

  // child to parent
  @Output() newItemEvent = new EventEmitter<string>()

  addList(content: string) {
    this.newItemEvent.emit(content)
  }
  constructor() { }



  ngOnInit() {
  }

}
