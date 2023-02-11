<template>
  <div class='calculator__buttons_two'>
    <AppButton
      :classBtn="'calculator__button calculator__button-clear'"
      :valueBtn="'clear'"
       @clickBtn='checkValue'
    ><span class="button__text">Очистить</span></AppButton>
    <AppButton
      :classBtn="'calculator__button calculator__button-result'"
      :valueBtn="'count'"
      @clickBtn='checkValue'
    ><span class="button__text">Расчитать</span></AppButton>
  </div>
</template>

<script>
export default {
  name: 'AppButtons',
  emits: ['sentValue', 'countValue'],
  data () {
    return {
    }
  },
  methods: {
    checkValue (value) {
      if (value === 'clear') {
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
