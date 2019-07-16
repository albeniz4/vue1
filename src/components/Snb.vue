<template>
  <div id="header">
    <p class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo_b.png" alt="상쾌환" width="126" />
      </router-link>
    </p>

    <p class="title" v-if="!isMain">{{name}}</p>
    <ul class="nav" v-if="!isMain">
      <li :class="{on:isActive(menu.idx)}" v-for="(menu, idx) in menus" :key="idx">
        <p>
          <a :href="menu.to">{{menu.name}}</a>
        </p>
      </li>
    </ul>

    <p class="control">
      <img src="@/assets/images/btn_arrow.gif" alt />
    </p>
  </div>
  <!-- //header -->
</template>

<script>
import axios from "axios";

export default {
  name: "Snb",
  data() {
    return {
      name: "",
      menus: []
    };
  },
  watch: {
    $route(to, from) {
      axios.get("/menu.json").then(result => {
        let idx = this.findIdx(result.data);
        for (let row of result.data) {
          if (row.idx === idx) {
            if (row.sub !== null) {
              this.menus = row.sub;
            }
          }
        }
      });
    }
  },
  computed: {
    isMain() {
      return this.$route.path === "/";
    }
  },
  methods: {
    isActive(idx) {
      return idx === 1;
    },
    findIdx(data) {
      for (let row of data) {
        if (row.to === this.$route.path) {
          return row.idx;
        }
      }
    }
  },
  created() {
    this.EventBus.$on("gnb-update", name => {
      this.name = name;
    });
  }
};
</script>
