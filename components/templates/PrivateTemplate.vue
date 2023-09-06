<template>
  <div id="private">
    <h1>SETOR DE CADASTROS</h1>
    <h2>Área privativa do administrador</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
#private {
  display: grid;
  margin: 150px auto;
  padding: 15px;
  align-content: center;
  text-align: center;
  background-color: color(dark, shade1);
  max-width: 700px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  color: color(white, shade1);
}
</style>
