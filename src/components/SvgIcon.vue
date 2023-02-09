<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    width:{
      type: Number,
      default: 20
    },
    height:{
      type: Number,
      default: 20
    }
  },
  computed: {
    iconPath() {
      let icon = require(`@/assets/icons/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default;
      }
      return icon.url;
    },
  }
};
</script>

<template>
  <svg :class="$style.icon"
       xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height">
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink"/>
  </svg>
</template>

<style lang="scss" module>
.icon {
  fill: currentColor;
}
</style>
