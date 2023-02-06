<script>
export default {
  name: "BaseContainer"
}
</script>

<template>
  <div :class="$style.container">
    <slot/>
  </div>
</template>

<style lang="scss" module>
.container{
  max-width: rem(800);
  margin: 0 auto;
}
</style>
