<template>
  <div id="container">
    <location :large-idx="2" :small-idx="1"/>
    <div>나누자 내용</div>
  </div>
</template>
<script>
  import Location from "@/components/Location.vue";

  export default {
    name: 'Index',
    components: {
      Location
    }
  }
</script>
