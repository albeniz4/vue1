<template>
  <div id="container">
    <location :large-idx="3" :small-idx="1"/>
    <div>이벤트 내용</div>
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
