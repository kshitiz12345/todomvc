import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {

  @Input()
  label:string;

  @Input()
  id:string;

  @Input()
  type:string;

  @Output() onKeyUpEmitter : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp($event) {
    const value : string = $event.target.value;
    this.onKeyUpEmitter.emit(value)
  }

}
