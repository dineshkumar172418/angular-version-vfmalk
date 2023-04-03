
import { ViewChild } from '@angular/core';
import { Component, VERSION } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { CustomService } from './custom.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild (ChildComponent) child!:ChildComponent;
  name = 'Angular 6';
  version = VERSION.full;
  twoway: any = 'HI';
 // constructor(public custom: CustomService) {}
  something() {
    alert('key pressed');
  }
  isdisabled = true;
  parentvariable: any;
}
