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


  populateList(count, currentDataList=[]) {
    const dataList = []
      for(let i=1; i<=count;i++) {
        const tag = Math['randomString']()
        dataList.push({
          id : i,
          title: this.data.title,
          tag: tag
        })
      }
      this.dataList = [...currentDataList, ...dataList];;
  }

  titleTextBoxEvent(event) {
    this.data.title = event.target.value;
    this.populateList(this.data.count);
  }

  numberTextBoxEvent(event) {
    let count = parseInt(event.target.value);
    count = (count <= HomeComponent.MAX_COUNT) ? count : HomeComponent.MAX_COUNT;
    this.data.count = count;
    this.populateList(this.data.count);
  }

  addButtonClicked(event) {
    this.populateList(this.data.count, this.dataList);
  }


  containerClicked(event) {
    if(event.target.type === "button") {
      const elem = event.target.parentElement.parentElement;
      const tag = (elem.getAttribute("id"));
      this.dataList = this.dataList.filter(data => (data.tag) !== tag);
    }
  }

  tagEvent(event) {
    if(event.target.value.length) {
      const dataList = this.dataList.filter(data => {
        return (data.tag.includes(event.target.value))
      });
      this.dataList = dataList;
    }  else{
      this.populateList(this.data.count);  
    }   
      
  }

}
