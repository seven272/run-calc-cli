<template>
  <li class="calculator__value calculator__pace" :class="{'calculator__value-disabled' : disabledInput}">
      <label class="calculator__label">Темп:</label>
      <AppInput
        v-model="pace.paceMinValue"
        :classBtn="'calculator__pace-minute'"
        :plHl="'минуты'"
        :disabledInput="disabledInput"
        >
      </AppInput>
      <AppInput
        v-model="pace.paceSecValue"
        :classBtn="'calculator__pace-second'"
        :plHl="'секунды'"
        :disabledInput="disabledInput"
        >
      </AppInput>
  </li>
</template>

<script>
export default {
  name: 'AppSpeed',
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
      pace: {
        paceMinValue: '',
        paceSecValue: ''
      }
    }
  },
  methods: {
    sendSpeed () {
      this.$emit('sentSpeed', this.pace)
    }
  },
  watch: {
    pace: {
      handler () {
        this.sendSpeed()
      },
      deep: true
    },
    'clear' () {
      this.pace.paceMinValue = ''
      this.pace.paceSecValue = ''
    }
  }

}
</script>

<style>

</style>
