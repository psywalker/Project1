import Vue from 'vue'
import Hello from './Hello.vue'
import './style.scss';

new Vue({
  el: '#app',
  render: h => h(Hello)
});
