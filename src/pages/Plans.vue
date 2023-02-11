<template>
<section class="plan">
  <router-link to="/calculator" class="plan__href-back"><i class="fi fi-rr-angle-double-left"></i>Вернуться обратно к калькулятору</router-link>
  <h1 class="plan__title">План на 5 километров</h1>
  <div class="plan__numbers">
    <button name="number" :value="numberWeek" class="plan__number-week"  v-for="(numberWeek, ind) in plan.length" :key="ind" @click="setNumberWeek(ind)" :style="[ind === indexWeek ? colorActiveBtn : '']">Неделя {{ numberWeek }}</button>
  </div>
  <div class="plan__weeks" v-for="(week, ind) in plan" :key="ind" >
    <!-- <h2>Неделя {{ ind + 1}}</h2> -->
    <ul class="plan__week" v-if="ind === indexWeek">
      <li class="plan__day" v-for="(day, ind) in week" :key="ind" :style="[day.day === getNowDay ? styleDayActive : '']">
        <p class="plan__day-name" :style="[day.day === getNowDay ? styleDayActive : '']"><span>{{ day.day }}</span></p>
        <p class="plan__day-title" :style="[day.day === getNowDay ? styleDayActive : '']">{{ day.title }}</p>
        <p class="plan__day-description" :style="[day.day === getNowDay ? styleDayActive : '']">{{ day.description }}</p>
        <div class="plan__day-result">
          <span class="plan__day-result_title" :style="[day.day === getNowDay ? styleDayActive : '']">Тренировка выполнена на:</span>
          <div class="plan__day-result_block-buttons" >
            <AppPlanInput
            :idBtn="'0'"
            :nameBtn="'0'"
            :valueBtn="0"
            @setValue="checkValue"
            >
             0%
            </AppPlanInput>
            <AppPlanInput
            :idBtn="'1'"
            :valueBtn="3"
            :nameBtn="'25'"
            @setValue="checkValue"
            >
             25%
            </AppPlanInput>
             <AppPlanInput
            :idBtn="'2'"
            :valueBtn="5"
            :nameBtn="'50'"
            @setValue="checkValue"
            >
             50%
            </AppPlanInput>
            <AppPlanInput
            :idBtn="'3'"
            :nameBtn="'75'"
            :valueBtn="7"
            @setValue="checkValue"
            >
             75%
            </AppPlanInput>
            <AppPlanInput
            :idBtn="'4'"
            :nameBtn="'100'"
            :valueBtn="10"
            @setValue="checkValue"
            >
             100%
            </AppPlanInput>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>
</template>

<script>
import planFiveKm from '@/assets/plans/5km.js'
import AppPlanInput from '@/components/plans/AppPlanInput.vue'
export default {
  name: 'PlanFive',
  components: {
    AppPlanInput
  },
  data () {
    return {
      plan: planFiveKm,
      indexWeek: 0,
      levelTraining: 0
    }
  },
  computed: {
    colorActiveBtn () {
      const styleBtn = {
        color: 'white',
        background: 'rgb(13, 113, 237)',
        borderRadius: '12px'
      }
      return styleBtn
    },
    styleDayActive () {
      const styleDay = {
        color: 'white',
        background: 'rgb(13, 113, 237)'
      }
      return styleDay
    },
    styleSectionName () {
      const styleDay = {
        color: 'white',
        background: 'rgb(13, 113, 237)'
      }
      return styleDay
    },
    getNowDay () {
      const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ]
      const d = new Date()
      const n = d.getDay()
      const nowDay = days[n]
      return nowDay
    }
  },
  methods: {
    setNumberWeek (ind) {
      this.indexWeek = ind
    },
    checkValue (val) {
      this.levelTraining = val
    }
  }

}
</script>

<style scoped>

</style>
