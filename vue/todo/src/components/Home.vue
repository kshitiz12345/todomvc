<template>
  <div class="container">
      <InputBox type="text" id="title" label="Title" v-on:keyup="titleTextBoxEvent($event)"/>
      <div class="tag_count">
        <InputBox type="number" id="count" label="Enter Count" v-bind:value="count" v-on:keyup="numberTextBoxEvent($event)"/>
        <InputBox type="text" id="tag" label="Search by Tag" v-bind:value="tag" v-on:keyup="tagEvent($event)"/>
      </div>
      <div v-for="item in dataList" :key="item.id" v-on:click="containerClicked($event)">
        <DataList :title="item.title" :index="item.id" :key="item.id" :tag="item.tag"></DataList>
      </div>
      <Button label="Add" type="button" variant="primary" v-on:clicked="addButtonClicked"/>
  </div>
</template>

<script>

import InputBox from './InputBox.vue'
import Button from './Button.vue' 
import DataList from './DataList.vue' 
import Data from '../data.js';

const data = new Data();

export default {
  name: 'Home',
  components: {
    InputBox,
    Button,
    DataList
  },
  data: () => {
      return {
        title: data.title,
        count: data.count,
        tag: "",
        dataList: []
    }
  },
  methods: {
    populateList(count, currentDataList=[]) {
      const dataList = []
      for(let i=1; i<=count;i++) {
        const tag = Math.randomString()
        dataList.push({
          id : i,
          title: this.title,
          tag: tag
        })
      }
      this.dataList = [...currentDataList, ...dataList];
    },
    addButtonClicked() {
      this.populateList(this.count, this.dataList);
    },
    numberTextBoxEvent($event) {
      this.count = parseInt($event.target.value)
      this.populateList(this.count);
    },

    titleTextBoxEvent($event) {
      this.title = $event.target.value
      this.populateList(this.count);
    },

    containerClicked($event) {
      if($event.target.type === "button") {
        const elem = $event.target.parentElement;
        const tag = (elem.getAttribute("tag"));
        this.dataList = this.dataList.filter(data => (data.tag) !== tag);
      }
    },

    tagEvent(event) {
      if(event.target.value.length) {
        const dataList = this.dataList.filter(data => {
          return (data.tag.includes(event.target.value))
        });
        this.dataList = dataList;
      }  else{
        this.populateList(this.count);  
      }   
        
    }
  }
}
</script>

<style>
  
  .container {
    display: grid;
  }

  .container .tag_count {
    display: flex;
    justify-content: space-between;
  }


</style>
