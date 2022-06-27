import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/api/api.service";
@Component({
  selector: "app-listuser",
  templateUrl: "./listuser.component.html",
  styleUrls: ["./listuser.component.scss"],
})
export class ListuserComponent implements OnInit {
  user_profile = {
    username: "",
    email: "",
  };
  id: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    public apiService: ApiService
  ) { }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.apiService.getUserProfile({ id: this.id }).subscribe((result: any) => {
      this.user_profile.username = result.success.username;
      this.user_profile.email = result.success.email;
      console.log(
        "🚀 ~ file: listuser.component.ts ~ line 18 ~ ListuserComponent ~ this.apiService.getUserProfile ~ this.user_profile",
        this.user_profile
      );
    });
  }
}
