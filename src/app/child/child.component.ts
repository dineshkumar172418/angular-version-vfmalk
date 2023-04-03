import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() parentvariablevalue:string;
 @Output()
 parentvariable:any;
  constructor() { }

  ngOnInit() {
  }

}