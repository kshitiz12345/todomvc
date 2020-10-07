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
  description:string;

  @Input()
  title:string;

  @Input()
  image:string;


  constructor(private getDataService : GetDataService) { }

  ngOnInit(): void {
    const data = this.getDataService.selectedData;
    this.index = parseInt(data.index);
    this.description = data.description;
    this.title = data.title;
    this.image = data.image;
  }

}
