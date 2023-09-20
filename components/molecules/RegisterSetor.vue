<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <Message v-show="msg" :msg="msg" />
      </div>
      <div class="fom-field">
        <BaseInput v-model="setor" placeholder="setor" />
      </div>
      <p>
        <span>Deseja retornar para página inicial?</span>
        <NuxtLink to="/private">Retornar</NuxtLink>
      </p>
      <BaseButton text="Incluir" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { sector, users } from '@/store'

export default Vue.extend({
  data() {
    return {
      msg: '',
      setor: '',
      categoria: users.$single.category
    }
  },

  methods: {
    async onSubmit() {
      try {
        if (this.categoria !== 'admin') {
          this.msg = 'Usuário não autorizado!'
          setTimeout(() => (this.msg = ''), 3000)
          return
        }
        await sector.create({
          sector: this.setor
        })
        this.setor = ''
        this.msg = 'Registro incluido com sucesso!'
        setTimeout(() => (this.msg = ''), 3000)
      } catch (error) {
        this.msg = 'Registro não incluido.'
        setTimeout(() => (this.msg = ''), 3000)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
form {
  display: grid;
  grid-gap: 0.8rem;
  width: 80%;
  margin: 10px auto;
  text-align: left;

  button {
    width: 100%;
  }

  a {
    justify-self: end;
    font-size: 14px;
    color: color(white);
  }

  input {
    width: 100% !important;
    padding: 0.7rem 1.2rem;
    margin-top: 5px;
  }

  p {
    margin: auto;
  }
}
</style>
