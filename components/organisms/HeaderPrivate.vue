<template>
  <div class="nav">
    <div class="link">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/userRegister">Usuário</NuxtLink>
      <NuxtLink to="/unitRegister">Unidade</NuxtLink>
      <NuxtLink to="/sectorRegister">Sector</NuxtLink>
      <nuxtLink to="/userConsulta">Consulta User</nuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  background-color: #222;
  border-bottom: 4px solid #fbca03;
  padding: 15px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
}
.link {
  text-decoration: none;
  font-size: 18px;

  a {
    color: #fcba03;
    margin: 12px;
    transition: 0.5s;
  }

  a:hover {
    color: #fff;
  }

  //cursor: pointer;
}
</style>
