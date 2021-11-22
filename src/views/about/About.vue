<template>
  <div class="about">
    <h1>{{title}}</h1>
  </div>
</template>

<script lang="ts">
  import {mixins} from 'vue-class-component';
  import {AboutViewModel} from '@/views/about/AboutViewModel';

  export default class About extends mixins(AboutViewModel) {}
</script>
