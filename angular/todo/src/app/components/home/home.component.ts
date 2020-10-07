import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any = {}
  dataList = []
  static MAX_COUNT = 100;

  constructor(private getDataService : GetDataService) {
    this.data = getDataService.getData()
  }

  ngOnInit(): void {
  }


  populateList(count) {
    const dataList = []
      for(let i=1; i<=count;i++) {
        dataList.push({
          id : i,
          title: this.data.title,
          description: this.data.description,
          date: this.data.date,
          image: this.data.image
        })
      }
      this.dataList = dataList;
  }

  titleTextBoxEvent(title) {
    this.data.title = title;
    this.populateList(this.data.count);
  }

  descTextAreaEvent(description) {
    this.data.description = description;
    this.populateList(this.data.count);
  }

  numberTextBoxEvent(count) {
    count = parseInt(count);
    count = (count <= HomeComponent.MAX_COUNT) ? count : HomeComponent.MAX_COUNT;
    this.data.count = count;
    this.populateList(this.data.count);
  }

  addButtonClicked(event) {
    this.populateList(this.data.count + this.dataList.length);
  }


  containerClicked(event) {
    if(event.target.type === "button") {
      const elem = event.target.parentElement.parentElement;
      const index = parseInt(elem.getAttribute("id"));
      this.dataList = this.dataList.filter(data => parseInt(data.id) !== index);
    }
  }

}
