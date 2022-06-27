import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  // interpolation
  content = 'Welcome!'
  
  // oneway_binding
  title = "Displaying the content with one way binding";

  // twoway_binding
  data = "Ram and Syam";
  constructor(private route:Router) { }

  getHome(){
    this.route.navigate(['/parent_list'])
   }
  ngOnInit() {
  }

}
