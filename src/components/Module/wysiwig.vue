<script>
export default {
  name: "ModuleWysiwig"
}
</script>

<template>
  <div :contenteditable="true">
    <slot/>
  </div>
</template>

<style lang="scss" module>
</style>
