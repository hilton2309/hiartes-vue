<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <Message v-show="msg" :msg="msg" />
      </div>
      <div class="fom-field">
        <label>Nome</label>
        <BaseInput v-model="user.name" />
      </div>
      <div class="fom-field">
        <label>Usuário</label>
        <BaseInput v-model="user.username" />
      </div>
      <div class="fom-field">
        <label>Unidade</label>
        <BaseInput v-model="user.nameUnit" readonly />
      </div>
      <div class="fom-field">
        <label>email</label>
        <BaseInput v-model="user.email" readonly />
      </div>
      <div class="fom-field">
        <label>Password</label>
        <BaseInput
          v-model="user.password"
          type="password"
          placeholder="Senha"
        />
      </div>
      <div class="fom-field">
        <label>Repita a senha</label>
        <BaseInput
          v-model="user.passwordConfirmation"
          type="password"
          placeholder="Repita a senha"
        />
      </div>
      <p>
        <span>Deseja retornar para página inicial?</span>
        <NuxtLink to="/">Retornar</NuxtLink>
      </p>
      <BaseButton text="Alterar" />
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import { users } from '@/store'

export default Vue.extend({
  data() {
    return {
      msg: '',
      user: {
        email: users.$single.email,
        category: users.$single.category,
        name: users.$single.name,
        unitId: users.$single.unitId,
        username: users.$single.username,
        password: '',
        passwordConfirmation: '',
        nameUnit: users.$single.units.nome
      }
    }
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
        await users.update({
          ...this.user
        })
        this.msg = 'Registro alterado com sucesso!'
        setTimeout(() => (this.msg = ''), 3000)
      } catch (error) {
        alert('Algo deu errado!')
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

  label {
    margin: 20px;
    color: rgb(98, 107, 126);
  }

  p {
    margin: auto;
  }
}
</style>
