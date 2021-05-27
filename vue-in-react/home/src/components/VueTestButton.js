// import Vue from 'vue';
// import { render, h } from "vue";

const VueTestButton = Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

export default VueTestButton;