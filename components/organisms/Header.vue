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
      <div class="dropdown">
        <button class="dropbtn">Copias</button>
        <div class="dropdown-content">
          <nuxtLink to="/copies">Incluir</nuxtLink>
          <nuxtLink to="/copiesConsultation">Consultar</nuxtLink>
        </div>
      </div>
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
    margin: 2px 12px;
    transition: 0.5s;
  }

  a:hover {
    color: #fff;
  }

  //cursor: pointer;

  .dropbtn {
    background-color: #222;
    color: #fcba03;
    padding: 16px;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: inline-block;
    transition: 0.5s;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 8px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #f1f1f1;
    color: #fcba03;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #222;
    color: #fff;
  }

}
</style>
