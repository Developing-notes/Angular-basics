import { viewClassName } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.scss']
})
export class LocalstorageComponent implements OnInit {
  @Input() data;
  employee: object = {}//newdatapush
  employeeuser: any = [];//refresh
  olduser: any = [];//olduser
  main:any

  constructor() { }
  
  ngOnInit() {
    this.olduser = JSON.parse(localStorage.getItem('form') || '[]');
    console.log(this.olduser)
    this.main = JSON.parse(localStorage.getItem('form')|| '[]')
  }
  disPlay(name, password) {
    let user = {
      username: name,
      password: password
    }
    this.employee = (user)//formvalue
    this.employeeuser = this.olduser;
    this.employeeuser.push(this.employee)
    localStorage.setItem('form', JSON.stringify(this.employeeuser))
  }
  view() {
     this.main = JSON.parse(localStorage.getItem('form')|| '[]')
    // for (let i = 0; i < this.main.length; i++) {
    //   this.objdetails.username = this.main[i].username
    //   this.objdetails.password = this.main[i].password
    //   this.details.push(this.objdetails)
    //   console.log("getusername:" + this.main[i].username)
    //   console.log("getpassword:" + this.main[i].password)
    // }
  } 

}
