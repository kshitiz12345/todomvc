
<template>
     <div :index="index" :key="index" class="container data">
        <div class="home"  @click="routeToCardList()">
              <b-badge variant="info">Click to go Home</b-badge>
        </div>
        <div :index="index" class="image"><img :src="image" alt="alt" width="100" height="100" :index="index"/></div>
        <div class="info" :index="index">
          <div>
              <b-badge variant="info">Card: {{index}}</b-badge>
          </div>
          <div :index="index" contentEditable="true" class="title card-title h5">{{title}}</div>
          <div :index="index" contentEditable="true" class="desc"><p class="card-text">{{description}}</p></div>

          
        </div>
      </div>
</template>

<script>

export default {
  name: 'Data',
  data() {
      return {
        index: "",
        title: '',
        description: '',
        image: ''
    }
  },
  methods: {
    routeToCardList() {
      this.$router.push({
        name : "DataList"
      })
    }
  },
  created() {
      this.image = this.$route.params.image,
      this.description = this.$route.params.description,
      this.title = this.$route.params.title,
      this.index = this.$route.params.index
  }
}
</script>

<style>
    .data {
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
        margin-bottom: 15px;
    }

    .data .home {
        cursor: pointer;
        grid-row-start: 1;
        grid-row-end: 1;
    }

    .data .image {
        grid-row-start: 2;
        grid-row-end: 2;
    }

    .data .info {
        display: flex;
        flex-direction: column;
        grid-row-start: 3;
        grid-row-end: 3;
        padding: 10px;;
    }

    .data .info .desc {
        flex-grow: 1;
    }

    .data .info .remove {
        align-self: flex-end;
    }


    .data .image img {
        width: 100%;
        height: 100%;
    }

</style>

