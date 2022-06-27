import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';                         
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateComponent } from './template/template.component';
import { StructuralComponent } from './structural/structural.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PipePipe } from './pipe/pipe.pipe';
import { PipeComponent } from './pipe/pipe/pipe.component';

@NgModule({
  declarations: [ 
    AppComponent,
    OverviewComponent,
    ParentComponent,
    ChildComponent,
    LocalstorageComponent,
    TemplateComponent,
    StructuralComponent,
    DashboardComponent,
    PipePipe,
    PipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
