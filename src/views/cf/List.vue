<template>
  <div id="container">
    <location :large-idx="1" :small-idx="1"/>
    <div>보자 내용</div>
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
