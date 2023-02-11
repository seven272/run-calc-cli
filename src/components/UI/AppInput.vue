<template>
  <input type="text" class='calculator__input' :class="classBtn" :placeholder="plHl" title="Пожалуйста, вводите только цифры через точку" pattern="^[. 0-9]+$" :value="modelValue" @input="updateInput" :disabled="disabledInput">
</template>

<script>
export default {
  name: 'AppInput',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: [Number, String],
      default: 0
    },
    classBtn: {
      type: String,
      default: ''
    },
    plHl: {
      type: String,
      default: ''
    },
    disabledInput: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    updateInput (evt) {
      this.$emit('update:modelValue', evt.target.value)
    }
  }
}
</script>

<style>

</style>
