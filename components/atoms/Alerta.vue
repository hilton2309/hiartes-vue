<template>
    <div>
        <el-button v-show="casa" class="meu-botao-personalizado" @click="showMsgBox">Mostrar mensagem</el-button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MessageBox } from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";

export default Vue.extend({
    // sweetalert2  - https://github.com/avil13/vue-sweetalert2
    // https://github.com/GeovaniDarcie/Curso-Vue-Completo#event
    layout: 'hiartes',
    // middleware: 'auth',
    props: {
        casa: {
            type: Boolean,
            default: true
        }
    },


    data() {
        return {
            //   casa: false
        }
    },
    methods: {
        showMsgBox() {
            MessageBox.confirm('Deseja confirmar esta ação?', 'Mensagem', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancelar',
                type: 'warning'
            }).then(() => {
                this.$emit('update:casa', false);
                // this.casa = false
                this.$router.push('/')
            }).catch(() => {
                this.$emit('update:casa', false);
                // this.casa = false
            });
        }
    }
})
</script>

<!-- 
<template>
    <div>
        <input type="text" v-model="filtro" />
        <ul>
            <li v-for="item in listaFiltrada" :key="item.nome">
                {{ item.nome }} - {{ item.ativo }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Item } from '@/types';

@Component
export default class Lista extends Vue {
  lista: Item[] = [
    { nome: 'Item 1', ativo: true },
    { nome: 'Item 2', ativo: false },
    { nome: 'Item 3', ativo: true },
  ];
  filtro: string = '';

  get listaFiltrada(): Item[] {
    return this.lista.filter(item =>
      item.nome.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}
</script> -->



<!-- <template>
    <div>
        <input type="text" v-model="filtro" />
        <ul>
            <li v-for="item in lista" :key="item.nome" v-if="item.nome.toLowerCase().includes(filtro.toLowerCase())">
                {{ item.nome }} - {{ item.ativo }}
            </li>
        </ul>
    </div>
</template> -->


<!-- <style lang="css" scoped>
el-button {
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
    padding: 10px 20px;

}

.el-message-box__wrapper {
    background-color: #f5f5f5;
}

.el-message-box {
    border-radius: 5px;
}

.el-message-box__header {
    background-color: #e0e0e0;
    color: #333;
}

.el-message-box__title {
    font-size: 18px;
}

.el-message-box__content {
    padding: 20px;
}

.el-button--primary {
    background-color: #4CAF50;
}
</style> -->