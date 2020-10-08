import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  selectedData : any = {}

  constructor() { }

  getData() {
    return {

      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      count: 10

    }
  }

  selectData(data) {
    this.selectedData = data;
  }
}
