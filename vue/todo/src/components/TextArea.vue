<template>
    <b-form-group :id="id" :label="label">
        <b-form-textarea
            :id="id"
            :value="value"
            :type="type"
            v-on:keyup="keyup"
        ></b-form-textarea>
    </b-form-group>        
</template>

<script>
export default {
  name: 'TextArea',
  props: ["id", "label", "type", "value"],
  methods: {
    keyup : function($event) {
       this.$emit('keyup', $event);
    }
  }
}
</script>

