import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListuserComponent } from './listuser.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes= [
  {
    path: '',
    component: ListuserComponent
  }
];

@NgModule({
  declarations: [ListuserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ListuserModule { }
