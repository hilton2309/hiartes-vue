<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <Message v-show="msg" :msg="msg" />
      </div>
      <div class="fom-field">
        <BaseInput v-model="unit.nome" placeholder="nome" />
      </div>

      <select v-model="unit.uf" @change="buscarCidades">
        <option value="">Selecione um estado</option>
        <option v-for="estado in estados" :key="estado.id" :value="estado.sigla">
          {{ estado.nome }}
        </option>
      </select>

      <select v-model="unit.cidade">
        <option value="">Selecione uma cidade</option>
        <option v-for="cidade in cidades" :key="cidade.id" :value="cidade.nome">
          {{ cidade.nome }}
        </option>
      </select>

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
import { units } from '@/store'

export default Vue.extend({
  data() {
    return {
      estados: [{ id: '', nome: '', sigla: '' }],
      cidades: [{ id: '', nome: '' }],
      valor: { ...units.$all },
      msg: '',
      unit: {
        nome: '',
        cidade: '',
        uf: ''
      }
    }
  },

  mounted() {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((response) => response.json())
      .then((estados) => {
        this.estados = estados.map(
          (estado: { id: string; nome: string; sigla: string }) => ({
            id: estado.id,
            nome: estado.nome,
            sigla: estado.sigla
          })
        )
      })
  },

  methods: {
    async onSubmit() {
      try {
        await units.create({
          nome: this.unit.nome,
          cidade: this.unit.cidade,
          uf: this.unit.uf
        })

        this.msg = 'Registro incluído com sucesso!'
        setTimeout(() => (this.msg = ''), 3000)
      } catch (error) {
        this.msg = 'Registro não incluído.'
        setTimeout(() => (this.msg = ''), 3000)
      }
    },

    buscarCidades() {
      if (this.unit.uf) {
        fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.unit.uf}/municipios`
        )
          .then((response) => response.json())
          .then((cidades) => {
            this.cidades = cidades.map(
              (cidade: { id: string; nome: string }) => ({
                id: cidade.id,
                nome: cidade.nome
              })
            )
          })
      } else {
        this.cidades = []
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

  select {
    width: 100%;
    border-radius: 20px;
    padding: 0.7rem 1.2rem;
    margin: 10px auto 0 auto;
    color: color(white, shade2);
    background-color: color(dark, shade1);
  }
}
</style>
