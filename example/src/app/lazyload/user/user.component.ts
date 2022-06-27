import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { GeneralService } from 'src/app/common/general/general.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  arr: any
  constructor(public apiService: ApiService,
    public generalService: GeneralService,public route:Router ) { }
  ngOnInit() {
  }

  getUser() {
    this.apiService.getUserData().subscribe((success: any) => {
      console.log('message:', success);
      this.arr = success.success
      console.log("🚀 ~ file: template.component.ts ~ line 33 ~ TemplateComponent ~ this.apiService.getUserData ~ this.arr", this.arr)
    })
  }


  viewProfile(value) {
    this.route.navigate(['/view_profile',value])
  }

}
