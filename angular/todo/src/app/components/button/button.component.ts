import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  label:string;

  @Input()
  btnClass:string;
  
  classNames:string = "btn";

  @Output() onClickEmitter : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.classNames = this.classNames + " " + this.btnClass;
  }

  onClick($event) {
    this.onClickEmitter.emit()
  }

}
