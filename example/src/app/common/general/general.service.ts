import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  pattern = {
    email: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
    password: "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}"

  }

  constructor() { }
}
