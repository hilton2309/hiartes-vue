<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default Vue.extend({
  data() {
    return {
      name: 'Hilton'
    }
  },
  mounted() {
    this.showMessage()
  },

  methods: {
    showMsgBox() {
      MessageBox.confirm(
        `Deseja confirmar esta ação? ${this.name}`,
        'Mensagem',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancelar',
          type: 'warning'
        }
      )
        .then(() => {
          this.$router.push('/')
        })
        .catch(() => {
          this.$router.push('/login')
        })
    },

    // showMessage() {
    //     MessageBox.alert('Mensagem de exemplo', 'Título da mensagem', {
    //         confirmButtonText: 'OK',
    //         type: 'success',
    //         callback: () => {
    //             this.showMsgBox()
    //             // código a ser executado após o usuário clicar no botão de confirmação
    //         }
    //     });
    // },

    showMessage() {
      MessageBox.alert('Veja se os dados estão corretos', 'Atenção', {
        confirmButtonText: 'OK',
        type: 'warning',
        callback: () => {
          this.showMsgBox()
          // código a ser executado após o usuário clicar no botão de confirmação
        }
      })
    }
  }
})

// 'success': para exibir uma mensagem de sucesso.
// 'warning': para exibir uma mensagem de aviso.
// 'info': para exibir uma mensagem informativa.
// 'error': para exibir uma mensagem de erro.
</script>

<!-- // valor() {
       this.total = this.filteredItems().reduce((acc, item) => {
    //     if (item.coluna === valorDesejado) {
    //       return acc + item.id;
    //     } else {
    //       return acc;
    //     }
    //   }, 0);
    // }

    //     < button v-if= "user.ativo" class="ativo" @click="inativoUser(user.id, user.ativo)" >
    // x
    // < /button>
    // < button v -else class="deleta" @click="inativoUser(user.id, user.ativo)" >
    //   x
    //   < /button> -->
