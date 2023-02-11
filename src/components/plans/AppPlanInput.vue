<template>
  <input class="plan__day-result_button"  :id="idBtn" :name="nameBtn" type="radio" :value="valueBtn">
  <label  class="plan__day-result_label color_one" :class="{'plan__day-result_label-active': isActive}" :for="idBtn" @click="updateInput(valueBtn), changeClass()"><slot></slot></label>
</template>

<script>
export default {
  name: 'AppPlanInput',
  emits: ['setValue'],
  props: {
    valueBtn: {
      type: Number,
      default: 0
    },
    idBtn: {
      type: [String, Number],
      default: ''
    },
    nameBtn: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      classActiveBtn: 'plan__day-result_label-active',
      isActive: false
    }
  },
  methods: {
    updateInput (payload) {
      this.$emit('setValue', payload)
    },
    changeClass () {
      this.isActive = !this.isActive
    }
  },
  computed: {}

}
</script>

<style>

</style>
