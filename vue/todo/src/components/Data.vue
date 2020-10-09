
<template>
     <div :index="index" :key="index" class="container vue-data">
        <div class="home"  @click="routeToCardList()">
              <b-badge variant="info">Click to go Home</b-badge>
        </div>
        <div class="info" :index="index">
          <div>
              <b-badge variant="info">Card: {{index}}</b-badge>
              <b-badge variant="info tag">Tag:  {{tag}}</b-badge>
          </div>
          
          <div :index="index" class="title card-title h5">{{title}}</div>

          
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
        tag: ''
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
      this.index = this.$route.params.index,
      this.tag = this.$route.params.tag
  }
}
</script>

<style>
    .vue-data {
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
        margin-bottom: 15px;
    }

    .vue-data .home {
        cursor: pointer;
        grid-row-start: 1;
        grid-row-end: 1;
    }

  

    .vue-data .info {
        display: flex;
        flex-direction: column;
        padding: 10px;;
    }

    .vue-data .info .desc {
        flex-grow: 1;
    }

    .vue-data .info .remove {
        align-self: flex-end;
    }


</style>

