<template>
  <div class="wrap">
    <div class="gnb">
      <router-link :to="{ path: '/'}" exact>홈</router-link>
      <router-link :to="{ path: '/scholl'}" exact>학교</router-link>
      <router-link :to="{ path: '/brother-1'}" exact>형</router-link>
      <router-link :to="{ path: '/brother-2'}" exact>동생</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Main',
}
</script>
<style lang="scss">
  @import '@/assets/css/style.scss';
</style>