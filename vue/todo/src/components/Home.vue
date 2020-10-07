<template>
  <div class="container">
      <InputBox type="text" id="title" label="Title" v-on:keyup="titleTextBoxEvent($event)"/>
      <TextArea type="text" id="description" label="Description" v-bind:value="description" v-on:keyup="descTextAreaEvent($event)"/>
      <InputBox type="number" id="count" label="Enter Count" v-bind:value="count" v-on:keyup="numberTextBoxEvent($event)"/>
      <div v-for="item in dataList" :key="item.id" v-on:click="containerClicked($event)">
        <DataList :title="item.title" :index="item.id" :key="item.id"
            :description="item.description"  :image="item.image" ></DataList>
      </div>
      <Button label="Add" type="button" variant="primary" v-on:clicked="addButtonClicked"/>
  </div>
</template>

<script>
import InputBox from './InputBox.vue'
import TextArea from './TextArea.vue'
import Button from './Button.vue' 
import DataList from './DataList.vue' 
import Data from '../data.js';

const data = new Data();

export default {
  name: 'Home',
  components: {
    InputBox,
    TextArea,
    Button,
    DataList
  },
  data: () => {
      return {
        title: data.title,
        description: data.description,
        date: data.date,
        image: data.image,
        count: data.count,
        dataList: []
    }
  },
  methods: {
    populateList(count) {
      const dataList = []
      for(let i=1; i<=count;i++) {
        dataList.push({
          id : i,
          title: this.title,
          description: this.description,
          date: this.date,
          image: this.image
        })
      }
      this.dataList = dataList;
    },
    addButtonClicked() {
      this.populateList(this.count + this.dataList.length);
    },
    numberTextBoxEvent($event) {
      this.count = parseInt($event.target.value)
      this.populateList(this.count);
    },

    titleTextBoxEvent($event) {
      this.title = $event.target.value
      this.populateList(this.count);
    },

    descTextAreaEvent($event) {
      this.description = $event.target.value
      this.populateList(this.count);
    },

    containerClicked($event) {
      if($event.target.type === "button") {
        const elem = $event.target.parentElement.parentElement;
        const index = parseInt(elem.getAttribute("index"));
        this.dataList = this.dataList.filter(data => parseInt(data.id) !== index);
      }
    }
  }
}
</script>

<style>
  
  .container {
    display: grid;
  }


</style>
