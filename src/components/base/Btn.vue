<script>
import SvgIcon from "@/components/SvgIcon";

export default {
  name: "BaseBtn",
  props: {
    iconName: {
      type: String,
    },
    mode: {
      type: String,
      default: 'button' // button, text
    }
  },
  components: {SvgIcon},
}
</script>
<template>
  <button :class="[mode === 'button' ? $style.btn : $style.text ]">
    <SvgIcon
        :name="iconName"
        v-if="mode === 'button'"/>
    <slot></slot>
  </button>
</template>

<style lang="scss" module>
.btn {
  padding: rem(5);
  border-radius: rem(4);
  cursor: pointer;
  border: unset;
  background: #282828;
  transition: 0.2s linear;

  &:hover {
    scale: 1.05;
    background: lighten(#282828, 5%)
  }
}

.text {
  padding: rem(5);
  cursor: pointer;
  border: unset;
  color: #639EFF;
  background: unset;
  font-weight: 400;
  font-size: rem(15);
  line-height: rem(23);

  &:hover{
    color: lighten(#639EFF, 5%)
  }
}
</style>
