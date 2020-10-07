
<template>
     <div :index="index" :key="index" class="dataList">
        <div :index="index" class="image"><img :src="image" alt="alt" width="100" height="100" :index="index"/></div>
        <div class="info" :index="index">
          <div class="card-number" @click="routeToCard()">
              <b-badge variant="info">Click to View Card: {{index}}</b-badge>
          </div>
          <div :index="index" contentEditable="false" class="title card-title h5">{{title}}</div>
          <div :index="index" contentEditable="false" class="desc"><p class="card-text">{{description}}</p></div>
          <div class="remove">
            <Button label="remove" type="button" variant="danger" ></Button>
          </div>
          
        </div>
      </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'DataList',
  props: ["index", "title", "description", "variant", "image"],
  components: {
    Button
  },
  methods: {
    routeToCard() {
      this.$router.push({
        name : "Data",
        params : {
          image: this.image,
          description: this.description,
          title: this.title,
          index: this.index
        }
      })
    }
  }
}
</script>

<style>
    .dataList {
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
        margin-bottom: 15px;
    }

    .dataList .image {
        grid-row-start: 1;
        grid-row-end: 1;
    }

    .dataList .info {
        display: flex;
        flex-direction: column;
        grid-row-start: 2;
        grid-row-end: 2;
        padding: 10px;;
    }

    .dataList .info .desc {
        flex-grow: 1;
    }

    .dataList .info .remove {
        align-self: flex-end;
    }


    .dataList .image img {
        width: 100%;
        height: 100%;
    }

    .dataList .card-number {
      cursor: pointer;
    }
</style>

