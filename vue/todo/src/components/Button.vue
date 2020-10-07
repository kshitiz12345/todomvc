<template>
    <b-button :variant="variant" :id="id" :type="type" v-on:click="clicked()">{{label}}</b-button>   
</template>

<script>
export default {
  name: 'Button',
  props: ["id", "label", "type", "variant", "onClick"],
  methods: {
    clicked : function() {
       this.$emit('clicked');
    }
  }
}
</script>

