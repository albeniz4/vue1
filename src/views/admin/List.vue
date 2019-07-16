<template>
  <div id="container">
    <location/>
    <div>어드민 관리 내용</div>
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
