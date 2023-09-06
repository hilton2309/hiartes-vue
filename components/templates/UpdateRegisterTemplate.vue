<template>
  <div id="margem">
    <h1>Cadastro de Usuário</h1>
    <h4>Atualização de cadastro do usuário</h4>
    <UpdateUser />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
#margem {
  display: grid;
  margin: 70px auto;
  padding: 15px;
  align-content: center;
  text-align: center;
  background-color: color(dark, shade2);
  max-width: 500px;

  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  color: color(gray, shade2);
  h1 {
    margin: 5px auto;
  }
  h4 {
    margin: 10px auto;
  }
}
</style>
