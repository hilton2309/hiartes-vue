<template>
  <div class="login-template-container">
    <div class="form-box">
      <img class="logo" src="@/assets/img/LogoHiartes.png" alt="" />
      <div>
        <Message v-show="msg" :msg="msg" />
      </div>
      <div class="welcome">
        <p>Bem-vindo</p>
        <h2>Entre na sua conta</h2>
      </div>

      <LoginForm />

      <div class="register">
        <p>
          <span>Deseja retornar para página inicial?</span>
          <NuxtLink to="/">Retornar</NuxtLink>
        </p>
        <div>
          <BaseButton id="bottom" text="Logout" @click="onSubmit" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  data() {
    return {
      msg: ''
    }
  },

  head: { title: 'Login Client' },

  methods: {
    async onSubmit() {
      try {
        await auth.destroy()

        this.msg = 'logout com sucesso!'
        setTimeout(() => (this.msg = ''), 3000)

        this.$router.push('/login')
      } catch {
        this.msg = 'Não há usuário logado!'
        setTimeout(() => (this.msg = ''), 3000)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.login-template-container {
  background-color: rgb(2, 68, 143);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 1fr;
  width: 30%;
  height: 100%;
  align-content: center;
  border-radius: 10px;
  border: 2px solid rgb(168, 193, 253);
  margin: 30px auto;

  @include screen('medium', 'small') {
    grid-template-columns: 1fr;
  }
  .form-box {
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 4.3rem;
    padding: 10px 100px;

    @include screen('small') {
      padding: 3rem;
    }

    .logo {
      width: 100px;
      margin: auto;
      padding-top: 50px;
    }

    .welcome {
      text-align: center;
      p {
        font-size: 19px;
        color: color(gray, shade1);
        text-align: center;
      }

      h2 {
        font-size: 22px;
        font-weight: bold;
        color: color(white);
      }
    }
    .register {
      text-align: center;

      p {
        font-size: 14px;

        span {
          color: color(gray, shade1);
        }

        a {
          color: color(white);
          font-weight: bold;
        }
      }
      #bottom {
        width: 100%;
        margin: 5px auto 40px auto;
      }
    }
  }
}
</style>
