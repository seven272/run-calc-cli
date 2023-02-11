<template>
<main class="content">
    <div class="calculator">
      <ul class='calculator__header'>
          <li class='calculator__header-subtitle_start calculator__header_bike'><router-link to='/calculator' class='calculator__header-href calculator__header_bike-href'>Калькулятор</router-link></li>
          <li class='calculator__header-subtitle_start calculator__header_run'><router-link to='/result' class='calculator__header-href calculator__header_run-href'>Результаты</router-link></li>
      </ul>
      <router-view></router-view>
      <footer class="calculator__footer">
        <span class="calculator__footer-text">&#169; Разработка приложение WebSeven, <AppDate></AppDate></span>
      </footer>
    </div>
  </main>
</template>

<script>
import AppDate from '@/components/AppDate.vue'
export default {
  name: 'StartLayout',
  components: {
    AppDate
  }

}
</script>

<style>

</style>
