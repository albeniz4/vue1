<template>
  <div class="user">
    <span class="id">{{userName}}님께서 로그인중입니다.</span>
    <input type="button" value="로그아웃">
  </div>
</template>

<script>
  export default {
    name: 'GnbUser',
    data() {
      return {
        userName: "이민식"
      }
    }
  }
</script>
