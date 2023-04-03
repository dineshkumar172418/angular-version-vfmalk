import hi from '@angular/common/locales/hi';
import { Component, Input, OnInit } from '@angular/core';
import { CustomService } from '../custom.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnInit {
  @Input() parentvariablevalue: any;
  constructor(public custom: CustomService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = true;
  person = [
    {
      name: 'dinesh',
      age: 20,
      lname: 'kumar',
    },
    { name: 'dinesh1', age: 21, lname: 'kumar2' },
  ];
  name: any;
  nav() {
    document.getElementById('dinesh').innerHTML =
      'Entered Name  ' + this.name + ' is a student of a school';
  }
  nameid: any;
  nav1() {
    document.getElementById('dinesh1').innerHTML = 'Entered Id ' + this.nameid;
  }
}
