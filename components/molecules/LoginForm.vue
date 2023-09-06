<template>
  <form @submit.prevent="onSubmit">
    <div>
      <Message v-show="msg" :msg="msg" />
    </div>
    <div class="fom-field">
      <BaseInput v-model="email" type="email" placeholder="E-mail" />
    </div>
    <div class="fom-field">
      <BaseInput v-model="password" type="password" placeholder="Senha" />
    </div>

    <NuxtLink to="/recovery"> Esqueceu a senha? </NuxtLink>

    <BaseButton text="Entrar" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { auth, users } from '@/store'

export default Vue.extend({
  data() {
    return {
      msg: '',
      email: '',
      password: '',
      situacao: true,
      mensagem: ''
    }
  },

  methods: {
    showMessage() {
      MessageBox.alert(this.mensagem, 'Aviso', {
        confirmButtonText: 'OK',
        type: 'info',
        callback: () => {
          // código a ser executado após o usuário clicar no botão de confirmação
        }
      })
    },

    async onSubmit() {
      try {
        if (auth.$token) {
          this.mensagem =
            'Já existe um usuário logado! É necessário fazer o logout para dar acesso a outro usuário'
          this.showMessage()
          return
        }
        await auth.create({
          email: this.email,
          password: this.password
        })

        await users.show()
        this.situacao = users.$single.ativo

        if (!this.situacao) {
          await auth.destroy()
          this.mensagem = 'Desculpe! Usuário descredenciado'
          this.showMessage()
          return
        }

        this.msg = 'login com sucesso!'
        setTimeout(() => (this.msg = ''), 5000)

        this.$router.push('/')
      } catch {
        this.mensagem = 'Email ou senha incorretos!'
        this.showMessage()

        setTimeout(() => (this.msg = ''), 5000)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
form {
  input {
    width: 100%;
    padding: 0.7rem 1.2rem;
  }

  display: grid;
  grid-gap: 0.8rem;

  button {
    width: 100%;
  }

  a {
    justify-self: end;
    font-size: 14px;
    color: color(white);
  }
}
</style>
