<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <Message v-show="msg" :msg="msg" />
      </div>
      <div>
        <BaseInput v-model="user.name" placeholder="nome" required />

        <select
          id="categoria"
          v-model="user.category"
          name="categoria"
          required
        >
          <option value="">Categoria</option>
          <option value="normal">normal</option>
          <option value="editor">editor</option>
          <option value="admin">admin</option>
        </select>

        <select id="unid" v-model="user.unitId" name="unid" required>
          <option value="" selected>Unidade</option>
          <option v-for="unid in unidade" :key="unid.id" :value="unid.id">
            {{ `${unid.nome} - ${unid.cidade}` }}
          </option>
        </select>

        <BaseInput v-model="user.email" placeholder="email" required />

        <BaseInput
          v-model="user.password"
          type="password"
          placeholder="Senha"
          required
        />

        <BaseInput
          v-model="user.passwordConfirmation"
          type="password"
          placeholder="Repita a senha"
          required
        />
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
import { units, users } from '@/store'
import { Unit } from '@/models'

export default Vue.extend({
  data() {
    return {
      unidade: [] as Unit[],
      categoria: '',
      msg: '',
      user: {
        name: '',
        email: '',
        unitId: '',
        category: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  created() {
    this.unidades()
  },

  methods: {
    async onSubmit() {
      try {
        if (this.user.password !== this.user.passwordConfirmation) {
          this.msg = 'Password não está correto'
          setTimeout(() => (this.msg = ''), 3000)
          this.user.password = ''
          this.user.passwordConfirmation = ''
          return
        }

        await users.create({
          ...this.user,
          unitId: parseInt(this.user.unitId)
        })
        this.msg = 'Usuário adicionado com sucesso!'
        setTimeout(() => (this.msg = ''), 3000)
      } catch (error) {}
    },
    unidades() {
      const data = Object.values(units.$all)
      this.unidade = data
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
