<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <select id="setor" v-model="copias.sectorId" name="setor" required>
          <option value="">setor</option>
          <option v-for="s in setor" :key="s.id" :value="s.id">
            {{ s.sector }}
          </option>
        </select>

        <select id="tipo" v-model="copias.type" name="tipo" required>
          <option value="">tipo</option>
          <option value="normal">Normal</option>
          <option value="color">Colorida</option>
        </select>

        <BaseInput v-model="copias.amount" placeholder="quantidade" required />

        <BaseInput v-model="copias.comment" placeholder="comentário" />
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
import { copies, sector } from '@/store'
import { Sector } from '@/models'

export default Vue.extend({
  data() {
    return {
      setor: [] as Sector[],
      copias: {
        sectorId: '',
        amount: '',
        type: '',
        comment: ''
      },
      valor: true,
      valor2: true,
      ver: false,
      ver2: false
    }
  },
  mounted() {
    this.setor = Object.values(sector.$all)
  },
  methods: {
    // troca2(event: MouseEvent) {
    //   const isChecked = (event.target as HTMLInputElement).checked
    //   this.ver = isChecked
    // },

    // troca(event: MouseEvent) {
    //   const isChecked = (event.target as HTMLInputElement).checked
    //   this.ver = isChecked
    // },

    async onSubmit() {
      try {
        await copies.create({
          type: this.copias.type,
          sectorId: parseInt(this.copias.sectorId),
          amount: parseInt(this.copias.amount),
          comment: this.copias.comment
        })
        this.copias.sectorId = ''
        this.copias.amount = ''
        this.copias.type = ''
        this.copias.comment = ''
      } catch (error) {
        alert('Houve um erro ao tenatr incluir as copias')
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
  margin: 30px auto;
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
    margin-top: 10px;
  }

  select {
    width: 100%;
    border-radius: 20px;
    padding: 0.7rem 1.2rem;
    margin: 10px auto 0 auto;
    color: color(white, shade2);
    background-color: color(dark, shade1);
  }

  p {
    margin: auto;
  }
}
</style>
