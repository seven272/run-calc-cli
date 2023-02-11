<template>
  <button class='' :class="[classBtn, {'calculator__button_value-active': isValue}]"  :value="valueBtn" type="button" @click="$emit('clickBtn', valueBtn)"><slot></slot></button>
</template>

<script>
export default {
  name: 'AppButton',
  emits: ['clickBtn'],
  props: {
    classBtn: {
      type: String,
      default: ''
    },
    valueBtn: {
      type: String,
      default: ''
    },
    selectVal: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isValue () {
      let boolean = false
      if (this.selectVal === this.valueBtn) {
        boolean = true
      }
      return boolean
    }
  }

}
</script>

<style>

</style>
