<template>
  <li class='calculator__value calculator__distance' :class="{'calculator__value-disabled' : disabledInput}">
    <label class="calculator__label">Дистанция: </label>
      <AppInput
        v-model="distanceValue"
        :classBtn="'calculator__distance-km'"
        :plHl="'километров'"
        :disabledInput="disabledInput"
        >
      </AppInput>
  </li>
</template>

<script>
export default {
  name: 'AppDistance',
  props: {
    disabledInput: {
      type: Boolean,
      default: true
    },
    clear: {
      type: [String, Number],
      default: 'no'
    }
  },
  data () {
    return {
      distanceValue: ''
    }
  },
  methods: {
    sendDistance () {
      this.$emit('sentDistance', this.distanceValue)
    }
  },
  watch: {
    'distanceValue' () {
      this.sendDistance()
    },
    'clear' () {
      this.distanceValue = ''
    }
  }

}
</script>

<style>

</style>
