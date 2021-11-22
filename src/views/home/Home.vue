<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script lang="ts">
  import {mixins, Options} from 'vue-class-component';
  import HelloWorld from '@/components/hello-world/HelloWorld.vue';
  import {HomeViewModel} from '@/views/home/HomeViewModel'; // @ is an alias to /src

  @Options({
    components: {
      HelloWorld,
    },
  })
  export default class Home extends mixins(HomeViewModel) {}
</script>

<style scoped>
  @import "Home.less";
</style>
