import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Test } from "../test";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  apiUrl = "http://localhost:3000/admin/register";

  apiGet = "http://localhost:3000/admin/getUser"

  apiProfile = "http://localhost:3000/admin/get_profile"

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(private http: HttpClient) { }
  // method1
  postData(value) {
    // getmethod
    // return this.http.get(this.apiUrl)
    // method2
    // return this.http.get('/api/reg')
    // post_method
    return this.http.post(this.apiUrl, JSON.stringify(value),
      this.httpOptions);
  }
  getUserData() {
    return this.http.get(this.apiGet, this.httpOptions);
  }

  getUserProfile(value: any) {
    return this.http.post(this.apiProfile,
      JSON.stringify(value), this.httpOptions)
  }

}
