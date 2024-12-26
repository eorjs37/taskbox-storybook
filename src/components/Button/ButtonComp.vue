<template>
  <button class="button_comp" :disabled="isdisabled" @click="onBtnClick">{{ buttonname }}</button>
</template>
<script>
export default {
  props: {
    buttonname: {
      type: String,
      required: false,
      default: '버튼'
    },
    isdisabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ['btn-click'],
  setup(props, { emit }) {
    const onBtnClick = () => {
      emit('btn-click')
    }

    return {
      onBtnClick
    }
  }
}
</script>
<style scoped src="./buttoncomp.css"></style>
