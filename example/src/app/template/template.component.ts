import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ApiService } from "../api/api.service";
import { GeneralService } from "../common/general/general.service";
@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.scss"],
})
export class TemplateComponent implements OnInit {
  @ViewChild('login', { read: NgForm, static: true }) login: any;
  model: any = {};
  
  userObj = {
    username: "",
    email: "",
    password: "",
    confirm_password: ""
  };

  arr:any
  content:any="hello"
  constructor(public apiService: ApiService,public generalService:GeneralService) { }
  
  ngOnInit() {
  }

  onSubmit() {
    this.apiService.postData(this.userObj).subscribe((suc: any) => {
      console.log("success", suc);

    })

  }
}

