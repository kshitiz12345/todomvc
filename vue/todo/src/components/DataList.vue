
<template>
     <div :index="index" :key="index" class="dataList vue-data-list">
        <div class="info" :index="index">
          <div class="" >
              <b-badge @click="routeToCard()" variant="info card-number">Click to View Card: {{index}}</b-badge>
              <b-badge variant="info tag">Tag:  {{tag}}</b-badge>
          </div>
          <div :index="index" contentEditable="false" class="title card-title h5">{{title}}</div>
          <div class="remove" :tag="tag">
            <Button label="remove" type="button" variant="danger" ></Button>
          </div>
          
        </div>
      </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'DataList',
  props: ["index", "title", "variant", "tag"],
  components: {
    Button
  },
  methods: {
    routeToCard() {
      this.$router.push({
        name : "Data",
        params : {
          image: this.image,
          tag: this.tag,
          title: this.title,
          index: this.index
        }
      })
    }
  }
}
</script>

<style>
    .vue-data-list {
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
        margin-bottom: 15px;
    }

    .vue-data-list .info {
        display: flex;
        flex-direction: column;
        grid-row-start: 1;
        grid-row-end: 1;
        padding: 10px;;
    }

    .vue-data-list .info .desc {
        flex-grow: 1;
    }

    .vue-data-list .info .remove {
        align-self: flex-end;
    }

    .vue-data-list .card-number {
      cursor: pointer;
    }

    .vue-data-list .tag {
        margin-left: 10px;
    }

</style>

