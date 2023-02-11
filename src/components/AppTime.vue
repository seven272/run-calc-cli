<template>
  <li class='calculator__value calculator__time' :class="{'calculator__value-disabled' : disabledInput}">
      <label class="calculator__label">Время:</label>
      <AppInput
        v-model="time.hourValue"
        :classBtn="'calculator__time-hour'"
        :disabledInput='disabledInput'
        :plHl="'часы'"
        >
      </AppInput>
      <AppInput
        v-model="time.minValue"
        :classBtn="'calculator__time-minute'"
        :plHl="'минуты'"
        :disabledInput='disabledInput'
        >
      </AppInput>
      <AppInput
        v-model="time.secValue"
        :classBtn="'calculator__time-second'"
        :plHl="'секунды'"
        :disabledInput='disabledInput'
        >
      </AppInput>
  </li>
</template>

<script>
export default {
  name: 'AppTime',
  emits: ['sentTime'],
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
      time: {
        hourValue: '',
        minValue: '',
        secValue: ''
      }

    }
  },
  methods: {
    sendTime () {
      this.$emit('sentTime', this.time)
    }
  },
  watch: {
    time: {
      handler (newValue) {
        console.log(newValue)
        this.sendTime()
      },
      deep: true
      // immediate: true
    },
    clear: {
      handler (newValue) {
        this.time.hourValue = ''
        this.time.minValue = ''
        this.time.secValue = ''
      },
      deep: true
    }
  }

}
</script>

<style>

</style>
