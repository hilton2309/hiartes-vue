<template>
  <div class="nav">
    <div id="logo-url" to="/">
      <Logo id="logo" />
    </div>
    <div class="link">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">Sobre</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
      <nuxtLink to="/private">Privado</nuxtLink>
      <nuxtLink to="/copies">Copias</nuxtLink>
      <nuxtLink to="/copiesConsultation">Consulta</nuxtLink>
      <nuxtLink to="/updateRegister">Usuário: {{ nome }}</nuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { users, auth } from '@/store'

export default Vue.extend({
  props: {
    nome: { type: String, default: '' }
  },

  data() {
    return {
      // situacao: true
    }
  },
  // created() {
  //   this.situacao = users.$single.ativo
  //   this.verifica()
  // },

  methods: {
    // async verifica() {
    //   if (!this.situacao) {
    //     alert('Usuário descredenciado!')
    //     await auth.destroy()
    //     this.$router.push('/login')
    //   }
    // }
  }
})
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  background-color: #222;
  border-bottom: 4px solid #fbca03;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  z-index: 999px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
}

.nav #logo-url {
  margin: auto;
  margin-left: 0;
}

#logo {
  width: 70px;
  height: 70px;
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
