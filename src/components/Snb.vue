<template>
  <div id="header">
    <p class="logo">
      <router-link to="/"><img src="@/assets/images/logo_b.png" alt="상쾌환" width="126"></router-link>
    </p>

    <p class="title">{{name}}</p>
    <ul class="nav">
      <li :class="{on:isActive(menu.idx)}" v-for="menu in menus"><p><a :href='menu.to'>{{menu.name}}</a></p></li>
    </ul>

    <p class="control"><img src="@/assets/images/btn_arrow.gif" alt=""></p>
  </div><!-- //header -->
</template>

<script>
import axios from 'axios'

export default {
  name: 'Snb',
  data() {
    return {
      name : '',
      menus : []
    }
  },
  mounted() {
    axios.get("/menu2.json").then((result) => {
      this.menus = result.data;
    })
  },
  methods : {
    isActive(idx) {
      return idx === 1;
    }
  },
  created() {
    this.EventBus.$on('gnb-update', (name) => {
      console.log(name);
      this.name = name;
    });
  }
}
</script>
