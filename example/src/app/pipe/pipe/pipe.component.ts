import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  day = Date.now()
  num = 12346.46
  percentage = 0.56
  amount = 15000
  content = "Angular is a single page Application"
  
  details={name:"david",age:23,postition:"developer"}
  arr=[1,2,3,4]
  constructor() { }

  ngOnInit() {
  }

}
