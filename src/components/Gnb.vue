<template>
  <div id="gnb">
    <gnb-user/>
    <ul class="nav">
      <li v-for="(menu, idx) in menus" :class="{on:isActive(menu.to)}" :key="idx">
        <router-link v-bind:to="{path:menu.to}">{{menu.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import GnbUser from '@/components/GnbUser.vue'

  export default {
    name: 'Gnb',
    data() {
      return {
        currentPath: '',
        menus : []
      }
    },
    mounted() {
      axios.get("/menu.json").then((result) => {
        this.menus = result.data;
      });
    },
    watch: {
      $route (to, from) {
        this.currentPath = to.path;
        this.EventBus.$emit("gnb-update", this.findName(to.path));
      }
    },
    methods : {
      isActive(path) {
        return path === this.currentPath;
      },

      findName(path) {
        for (let menu of this.menus) {
          if (menu.to === path) {
            return menu.name;
          }
        }
      }
    },
    components: {
      GnbUser
    }
  }
</script>
