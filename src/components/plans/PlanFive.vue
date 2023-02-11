<template>
  <h1>План на 5 километров</h1>
  <ul>
    <li v-for="(week, ind) in plan" :key="ind">
      {{ week }}
    </li>
  </ul>
</template>

<script>
import planFiveKm from '@/assets/plans/5km.js'
export default {
  name: 'PlanFive',
  data () {
    return {
      plan: planFiveKm
    }
  }

}
</script>

<style>

</style>
