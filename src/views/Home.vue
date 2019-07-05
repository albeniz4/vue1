<template>
  <div id="container"></div>
</template>
<script>
  // @ is an alias to /src
  import Snb from '@/components/Snb.vue'
  import Gnb from '@/components/Gnb.vue'

  export default {
    name: 'home',
    components: {
      Snb,
      Gnb
    }
  }
</script>
