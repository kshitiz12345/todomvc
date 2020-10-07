import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  @Input()
  placeholder:string;

  @Input()
  label:string;

  @Output() onKeyUpEmitter : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp($event) {
    const value : string = $event.target.value;
    this.onKeyUpEmitter.emit(value)
  }

}
