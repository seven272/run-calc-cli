<template>
    <div class="calculator">
      <div class="calculator__title">
        <img :src="imgUrl" class="calculator__title-img">
        <span class="calculator__title-text">Беговой калькулятор</span>
      </div>
      <ul class='calculator__header'>
          <li class='calculator__header-subtitle calculator__header_swim'><router-link to='/start' class='calculator__header-href calculator__header_swim-href'>Начало</router-link></li>
          <li class='calculator__header-subtitle calculator__header_bike'><router-link to='/calculator' class='calculator__header-href calculator__header_bike-href'>Калькулятор</router-link></li>
          <li class='calculator__header-subtitle calculator__header_run'><router-link to='/result' class='calculator__header-href calculator__header_run-href'>Результаты</router-link></li>
      </ul>
      <router-view></router-view>
      <footer class="calculator__footer">
        <span class="calculator__footer-text">&#169; Разработка приложение <span>WebSeven</span>, <AppDate></AppDate></span>
      </footer>
    </div>
</template>

<script>
import AppDate from '@/components/AppDate.vue'
export default {
  name: 'MainLayout',
  components: {
    AppDate
  },
  data () {
    return {
      text: 'Бегвой калькулятор',
      imgUrl: require('@/assets/images/run.png')

    }
  }

}
</script>

<style>

</style>
