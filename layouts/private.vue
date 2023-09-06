<template>
  <div class="private">
    <HeaderPrivate />
    <div id="margem"></div>
    <Container>
      <Nuxt />
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
#margem {
  width: 100%;
  height: 100px;
}
</style>
