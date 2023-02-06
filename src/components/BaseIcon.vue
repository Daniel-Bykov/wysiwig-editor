<script>
export default {
  name: 'BaseIcon',

  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: [String, Number],
      default: 24
    },
    height: {
      type: [String, Number],
      default: 24
    }
  }
}
</script>

<template>
  <svg
    :class="$style.icon"
    :width="width"
    :height="height"
  >
    <!-- <use :xlink:href="`${require('../assets/icons.svg')}#${name}`"></use> -->
  </svg>
</template>

<style lang="scss" module>
.icon {
  display: block;
}
</style>
