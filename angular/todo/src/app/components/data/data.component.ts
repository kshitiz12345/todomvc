import { Component, OnInit, Input } from '@angular/core';
import { GetDataService } from 'src/app/get-data.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  @Input()
  index:number;

  @Input()
  title:string;

  @Input()
  tag:string;


  constructor(private getDataService : GetDataService) { }

  ngOnInit(): void {
    const data = this.getDataService.selectedData;
    this.index = parseInt(data.index);
    this.title = data.title;
    this.tag = data.tag;
  }

}
