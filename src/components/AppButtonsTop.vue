<template>
<div class="section__buttons">
  <p class='calculator__buttons_title'>Что будем считать</p>
  <div class='calculator__buttons_three'>
    <AppButton
      :classBtn="'calculator__button_value'"
      :valueBtn="'time'"
      :selectVal= "selectedValue"
      @clickBtn='checkValue'
    >
    <span class="fi fi-rr-time-past">&nbsp;&nbsp;Время</span>
    </AppButton>
    <AppButton
      :classBtn="'calculator__button_value'"
      :valueBtn="'distance'"
      :selectVal= "selectedValue"
       @clickBtn='checkValue'
    >
    <span class="fi fi-rr-road">&nbsp;&nbsp;Дистанцию</span>
    </AppButton>
     <AppButton
      :classBtn="'calculator__button_value'"
      :valueBtn="'pace'"
      :selectVal= "selectedValue"
       @clickBtn='checkValue'
    >
      <span class="fi fi-rr-rocket-lunch">&nbsp;&nbsp;Темп</span>
    </AppButton>
  </div>
</div>

</template>

<script>
export default {
  name: 'AppButtonsTop',
  emits: ['sentValue', 'countValue'],
  data () {
    return {
      // showBtnsCount: false,
      selectedValue: ''
    }
  },
  methods: {
    checkValue (value) {
      this.selectedValue = value
      if (value === 'time' || value === 'pace' || value === 'distance' || value === 'clear') {
        this.$emit('sentValue', value)
      } else if (value === 'count') {
        this.$emit('countValue')
      }
    }
  }
}
</script>

<style>

</style>
