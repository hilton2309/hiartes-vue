<template>
  <div>
    <SectorRegisterTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'private',
  middleware: 'auth'
})
</script>

<style lang="scss" scoped></style>
