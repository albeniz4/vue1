<template>
  <div id="container">
    <location :large-idx="4" :small-idx="1"/>
    <div>기본 관리 내용</div>
  </div>
</template>
<script>
  import Location from "@/components/Location.vue";

  export default {
    name: 'List',
    components: {
      Location
    }
  }
</script>
