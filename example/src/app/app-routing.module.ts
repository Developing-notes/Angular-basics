import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ParentComponent } from './parent/parent.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {
    path: 'user_list',
    loadChildren: () =>
      import('./lazyload/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'view_profile/:id',
    loadChildren: () =>
      import('./views/listuser/listuser.module').then(m => m.ListuserModule)
  },

  { path: 'overview_list', component: OverviewComponent },
  { path: 'parent_list', component: ParentComponent },
  { path: 'register_process', component: TemplateComponent },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
