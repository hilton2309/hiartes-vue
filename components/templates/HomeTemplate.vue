<template>
  <div id="margens">
    <h1>Home-template</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      situacao: true
    }
  }
})
</script>

<style lang="scss" scoped>
#margens {
  display: grid;
  margin: auto;
  align-content: center;
  h1 {
    text-align: center;
  }
}
</style>
