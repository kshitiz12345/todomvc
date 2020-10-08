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
  title:string;

  @Input()
  tag:string;

  constructor(private getDataService : GetDataService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateToData($event, index, title, tag) {
    this.getDataService.selectData({index, title, tag});
    this.router.navigate(["/data", index]);
  }

}
