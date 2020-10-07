import { Component, OnInit, Input } from '@angular/core';
import { GetDataService } from '../../get-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  @Input()
  index:number;

  @Input()
  description:string;

  @Input()
  title:string;

  @Input()
  image:string;


  constructor(private getDataService : GetDataService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateToData($event, index, title, description, image) {
    this.getDataService.selectData({index, title, description, image});
    this.router.navigate(["/data", index]);
  }

}
