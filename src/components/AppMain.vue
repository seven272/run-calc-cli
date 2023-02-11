<template>
            <div class='calculator__section' id='calculator__run'>
              <AppButtonsTop
                  @sentValue="checkFields"
                  @countValue="countData"
                ></AppButtonsTop>
                <ul class='calculator__values'>
                  <AppTime
                    v-if="showFieldTime"
                    :disabledInput="isDisabled"
                    :clear="clearInput"
                    @sentTime="getTime"
                  ></AppTime>

                  <AppDistance
                    v-if="showFieldDistance"
                    :disabledInput="isDisabled"
                    :clear="clearInput"
                    @sentDistance="getDistance"
                  ></AppDistance>

                  <AppSpeed
                    v-if="showFieldPace"
                    :disabledInput="isDisabled"
                    :clear="clearInput"
                    @sentSpeed="getSpeed"
                  ></AppSpeed>
                </ul>
                <AppButtons
                  @sentValue="checkFields"
                  @countValue="countData"
                ></AppButtons>
                <AppResult
                  :resultObject="result"
                  :showMessage="showResultSection"
                ></AppResult>

                  <router-link to="/plans" class="href__plans"><span class="fi fi-rr-box-alt"></span> Смотреть тренированчый план</router-link>
            </div>
</template>

<script>
import AppTime from '@/components/AppTime.vue'
import AppDistance from '@/components/AppDistance.vue'
import AppSpeed from '@/components/AppSpeed.vue'
import AppButtons from '@/components/AppButtons.vue'
import AppButtonsTop from '@/components/AppButtonsTop.vue'
import AppResult from '@/components/AppResult.vue'
export default {
  name: 'AppMain',
  components: {
    AppTime,
    AppDistance,
    AppSpeed,
    AppButtons,
    AppButtonsTop,
    AppResult
  },
  data () {
    return {
      time: {
      },
      speed: {
      },
      distance: 0,
      totalTime: 0,
      result: {
        time: '',
        distance: '',
        pace: ''
      },
      resultMessage: '',
      valueButton: '',
      fields: {
        time: false,
        distance: false,
        pace: false
      },
      isDisabled: true,
      clearInput: 'no',
      showResultSection: 'no'
    }
  },
  methods: {
    getTime (objTime) {
      Object.keys(objTime).forEach((key) => {
        this.time[key] = Number(objTime[key])
      })
      // console.log(this.time)
      this.joinTimeValues()
    },
    getSpeed (objSpeed) {
      for (const key in objSpeed) {
        this.speed[key] = Number(objSpeed[key])
      }
      // this.calcDistance()
      // console.log(this.speed)
    },
    getDistance (payload) {
      this.distance = Number(payload)
      // console.log(this.distance)
      // this.calcPace()
      // this.calcTime()
    },
    // обьединяем все инпуты "время" в один:  первый шаг ф-я joinTimeValues, второй шаг навешиваем на них слушателей
    joinTimeValues () {
      if (Object.keys(this.time).length > 0) {
        // переводим часы и минуты в секунды
        const hourMakeinSecundes = this.time.hourValue * 3600
        const minuteMakeinSecundes = this.time.minValue * 60
        // округляем полученное значение для секунд до двух цифр после запятой
        // secondMakeinMinutes = secondMakeinMinutes.toFixed(2)
        // обьеденяем значения со всех тpех инпутов времени в один
        this.totalTime = Number(hourMakeinSecundes) + Number(minuteMakeinSecundes) + Number(this.time.secValue)

        console.log('Общее время в секундах ' + this.totalTime)

      // allPaceInput = inputPaceMin.value + '.' + inputPaceSec.value
      }
    },
    // Расчет темпа бега
    calcPace () {
    // преобразуем данные в числовой формат и заодно км переводим в метры
      const distance = Number(this.distance * 1000)
      // console.log('Дистанция в метрах:' + distance)

      // расчитываем скорость км/ч она же темп
      let speed = (distance / this.totalTime * 3600) / 1000

      // округляем значение до двух цифр после запятой
      speed = speed.toFixed(2)

      // расчитываем темп без приведения дробной части к секундам
      let pace = 60 / speed

      // округляем темп до 2 знаком после запятой, при этом метод toFixed приводит число к строке
      pace = pace.toFixed(2)

      // дальше пытаемся вытащить две цифры после точки
      // переводим цифровое значение в строку
      pace = String(pace)

      // дальше с помощью метода сплит преобразуем строку в массив. получаем два элемента значение до точки и после точки
      const arrayPace = pace.split('.')

      // сохраняем элементы массива в переменные
      // eslint-disable-next-line no-unused-vars
      let paceMin = arrayPace[0]
      let paceSec = arrayPace[1]

      // теперь приводим строковые значения массива к числам
      paceMin = Number(paceMin)
      paceSec = Number(paceSec)

      // формула расчета пропорции, чтобы перевести цифры темпа после точки к формату секунд
      const proporcion = 60 * paceSec / 100
      // eslint-disable-next-line no-unused-vars
      const resultPaceSec = Math.round(proporcion)
      this.result.pace = `${paceMin} мин. ${resultPaceSec} сек.`
    },
    calcDistance () {
    // расчитываем дистанцию, переводя минуты в секунды
      let distance = this.totalTime / (Number(this.speed.paceMinValue) * 60 + Number(this.speed.paceSecValue))
      distance = distance.toFixed(3)
      distance = String(distance)
      const arrayDistance = distance.split('.')
      const kmVal = arrayDistance[0]
      const mVal = arrayDistance[1]
      this.result.distance = `${kmVal} км. ${mVal} м.`
    },
    calcTime () {
      // сохраняем данные из инпутов темпа в разные переменные для удобства
      const paceMin = this.speed.paceMinValue
      const paceSec = this.speed.paceSecValue

      // формула расчета пропорции, чтобы перевести цифры темпа после точки к формату секунд
      const proporcion = 100 * paceSec / 60
      const resultSpeedSec = Math.round(proporcion)
      const speed = paceMin + '.' + resultSpeedSec

      const timestamp = (Number(this.distance) * speed) * 60

      const hours = Math.floor(timestamp / 60 / 60)

      const minutes = Math.floor(timestamp / 60) - (hours * 60)

      const secundes = Math.floor(timestamp % 60)

      this.result.time = `${hours} ч.${minutes} мин.${secundes} сек.`
    },
    checkFields (value) {
      this.valueButton = value
      if (value === 'time') {
        this.fields.time = false
        this.fields.distance = true
        this.fields.pace = true
        this.isDisabled = false
        this.clearInput = 'yes1'
        this.showResultSection = 'no'
        this.result.time = ''
        this.result.distance = ''
        this.result.pace = ''
      } else if (value === 'distance') {
        this.fields.time = true
        this.fields.distance = false
        this.fields.pace = true
        this.isDisabled = false
        this.clearInput = 'yes2'
        this.showResultSection = 'no'
        this.result.time = ''
        this.result.distance = ''
        this.result.pace = ''
      } else if (value === 'pace') {
        this.fields.time = true
        this.fields.distance = true
        this.fields.pace = false
        this.isDisabled = false
        this.clearInput = 'yes3'
        this.showResultSection = 'no'
        this.result.time = ''
        this.result.distance = ''
        this.result.pace = ''
      } else if (value === 'clear') {
        this.fields.time = false
        this.fields.distance = false
        this.fields.pace = false
        this.isDisabled = true
        this.clearInput = 'yes'
        this.showResultSection = 'no'
        this.result.time = ''
        this.result.distance = ''
        this.result.pace = ''
      }
    },
    countData () {
      if (this.valueButton === 'time') {
        this.calcTime()
        this.showResultSection = 'yes'
      } else if (this.valueButton === 'distance') {
        this.calcDistance()
        this.showResultSection = 'yes'
      } else if (this.valueButton === 'pace') {
        this.calcPace()
        this.showResultSection = 'yes'
      }
    }
  },
  computed: {
    showFieldTime () {
      let boolean = true
      if (this.fields.distance && this.fields.pace) {
        boolean = false
      } else {
        boolean = true
      }
      return boolean
    },
    showFieldDistance () {
      let boolean = true
      if (this.fields.time && this.fields.pace) {
        boolean = false
      } else {
        boolean = true
      }
      return boolean
    },
    showFieldPace () {
      let boolean = true
      if (this.fields.time && this.fields.distance) {
        boolean = false
      } else {
        boolean = true
      }
      return boolean
    }
  }

}
</script>

<style>

</style>
