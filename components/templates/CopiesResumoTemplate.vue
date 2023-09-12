<template>
  <div id="titulo">
    <h1>Resumo Mensal</h1>
    <h4>Resumo de copias por setor/mês</h4>
    <ResumoCopies />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
#titulo {
  display: grid;
  margin: 10px auto;
  align-content: center;
  text-align: center;
  max-width: 1200px;
  color: color(gray, shade2);
  h1 {
    margin: 5px auto;
  }
  h4 {
    margin: 5px auto;
  }
}
</style>
