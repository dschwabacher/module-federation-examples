<template>
  <div class="layout-app">
    <!-- host app HOST-->
    <div class="app-label">
      # Hosting App [HOST] (Vue-based)
    </div>
    <img src="./logo.png" width="30" />
    <h1>Layout App 1</h1>
    <div class="remote-component">
      <!-- remote-component REMOTE -->
      <div class="app-label">
        #remote-component [REMOTE] (React-based)
      </div>
    </div>
    <Button />
  </div>
</template>

<script>
import Button from './Button'
import { ReactInVue } from 'vuera'

console.log('This is the Layout app, which is Vue based')

/*
export default {
    components: {
        Button
    },
};
*/

export default {
  components: { 'my-react-component': ReactInVue(Button) }
};
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
.remote-component {
  border: 1px solid blue;
  padding: 10px;
}
.layout-app {
  border: 1px solid green;
  padding: 10px;
}
.app-label {
  padding: 5px 2px;
  font-style: italic;
  font-size: 20px;
  color: gray;
}
</style>
