import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  constructor() { }
  
  // input_method
  currentitem="mobile"
  
  // output_method
  
  product=["pendrive","laptop","mobile"]

  addItem(value:string){
    this.product.push(value)
  }

  
  ngOnInit() {
  }


}
