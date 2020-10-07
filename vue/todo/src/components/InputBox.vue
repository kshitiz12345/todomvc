<template>
    <b-form-group :id="id" :label="label">
        <b-form-input
            :id="id"
            :type="type"
            :value="value"
            :v-model="model"
            v-on:keyup="keyup"
        ></b-form-input>
    </b-form-group>        
</template>

<script>
export default {
  name: 'InputBox',
  props: ["id", "label", "type", "value", "model"],
  methods: {
    keyup : function($event) {
       this.$emit('keyup', $event);
    }
  }
}
</script>

