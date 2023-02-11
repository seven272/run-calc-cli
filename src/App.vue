<template>
<component :is='layout'>
  <router-view></router-view>
</component>

</template>
<script>
export default {
  name: 'App',
  computed: {
    layout () {
      const name = this.$route.meta.layout || 'MainLayout'
      return name
    }
  }
}
</script>

<style>
  @import url('./assets/style/index.css');
</style>
