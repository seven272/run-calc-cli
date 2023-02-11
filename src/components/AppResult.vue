<template>
 <div class='calculator__result' v-show="showBlock">
    <h2 class='calculator__result-header'>Результат: </h2>
    <span class='calculator__result-header-value' v-html="showResult"></span>
  </div>

</template>

<script>
export default {
  name: 'AppResult',
  props: {
    resultObject: {
      type: Object,
      default: () => {}
    },
    showMessage: {
      type: [String, Number],
      default: 'yes'
    }
  },
  computed: {
    showResult () {
      let message = ''
      if (this.resultObject.time !== '') {
        message = `Ваше время составит <span class="result__text">${this.resultObject.time}</span>`
      } else if (this.resultObject.distance !== '') {
        message = `Ваша дистанция составит <span class="result__text">${this.resultObject.distance}</span>`
      } else if (this.resultObject.pace !== '') {
        message = `Ваша темп составит <span class="result__text">${this.resultObject.pace}</span>`
      }
      return message
    },
    showBlock () {
      let boolean = false
      if (this.showMessage === 'yes') {
        boolean = true
      }
      return boolean
    }
  }

}
</script>

<style>

</style>
