<template>
  <div id="app">
    <div id="wrapper" v-bind:class="{main:isMain}">
      <snb/>
      <gnb/>
      <router-view/>
    </div><!-- //wrapper -->
  </div>
</template>
<script>
  // @ is an alias to /src
  import Snb from '@/components/Snb.vue'
  import Gnb from '@/components/Gnb.vue'

  export default {
    name: 'app',
    data() {
      return {
        isMain:false
      }
    },
    components: {
      Snb,
      Gnb
    },
    mounted() {
      this.isMain = this.$router.currentRoute.path === "/";
    },
    watch: {
      $route (to, from) {
        this.isMain = to.path === "/";
      }
    }
  }
</script>
<style lang="scss">
  @import './assets/css/common.scss';
</style>
