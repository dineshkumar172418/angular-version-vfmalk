import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomService } from './custom.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, ChildComponent, Child2Component],
  bootstrap: [AppComponent],
  providers: [CustomService],
})
export class AppModule {}
