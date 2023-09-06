<template>
  <div id="copia-table">
    <div class="search">
      <input v-model="searchTerm" type="text" placeholder="Buscar" />
      <img src="@/assets/img/Search.svg" alt="Buscar" />
    </div>

    <div>
      <div id="table-heading">
        <div class="order-id">#</div>
        <div>Nome</div>
        <div>e-mail</div>
        <div>Unidade</div>
        <div class="situacao">Categoria</div>
        <div class="situacao">Situação</div>
        <div class="botaocheck">Ativação</div>
      </div>
    </div>
    <div id="copia-table-row">
      <div
        v-for="user in filteredItems()"
        :key="user.id"
        class="copia-table-row"
      >
        <div class="order-number">{{ user.id }}</div>
        <div>{{ user.name }}</div>
        <div>{{ user.email }}</div>
        <div>{{ user.units.nome }}</div>
        <div class="situacao">
          <select @change="updateUser($event, user.id, user.ativo)">
            <option
              v-for="(c, index) in categoria"
              :key="index"
              :value="c"
              :selected="user.category == c"
            >
              {{ c }}
            </option>
          </select>
        </div>
        <div v-if="user.ativo" class="situacao">Ativo</div>
        <div v-else class="situacao">Inativo</div>
        <div class="botaocheck">
          <Botao
            :checked="user.ativo"
            @click="inativoUser(user.id, user.ativo)"
          />
        </div>
      </div>

      <div class="link">
        <span>Deseja retornar para página inicial?</span>
        <NuxtLink to="/private">Retornar</NuxtLink>
      </div>
    </div>
    <p>Total de Ativos: {{ total }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { users, ativo } from '@/store'
import { User } from '@/models'

export default Vue.extend({
  data() {
    return {
      usuarios: [] as User[],
      categoria: ['admin', 'editor', 'normal'],
      total: 0,
      searchTerm: '',
      situa: true
    }
  },

  beforeUpdate() {
    this.valor()
  },

  mounted() {
    this.unidades()
    this.valor()
  },

  methods: {
    valor() {
      this.total = this.filteredItems().reduce((acc, item) => {
        if (item.ativo) {
          return acc + item.id
        } else {
          return acc
        }
      }, 0)
    },

    // valor() {
    //   this.total = this.filteredItems().reduce((acc, item) => acc + item.id, 0)
    // },

    filteredItems(): User[] {
      return this.usuarios.filter(
        (item) =>
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    },

    unidades() {
      const data = Object.values(users.$all)
      this.usuarios = data
    },
    async usuario() {
      await users.index()
      this.unidades()
    },
    async inativoUser(id: number, valor: boolean) {
      await ativo.update({
        id,
        ativo: !valor,
        category: ''
      })
      this.usuario()
    },
    async updateUser(event: any, id: number, situacao: any) {
      const option = event.target.value

      await ativo.update({
        category: option,
        ativo: situacao,
        id
      })
      this.usuario()
    }
  }
})
</script>

<style lang="scss" scoped>
#table-heading .botaocheck,
.copia-table-row .botaocheck {
  width: 10%;
  text-align: center;
  display: flex;
  align-items: center;
}

#table-heading .situacao,
.copia-table-row .situacao {
  width: 13%;
}

#copia-table {
  max-width: 1200px;
  margin: 0 auto;
}

#table-heading,
.copia-table-row {
  display: flex;
  flex-wrap: wrap;
}

#table-heading {
  font-weight: bold;
  padding: 10px;
  border-bottom: 3px solid #333;
}

#table-heading div,
.copia-table-row div {
  width: 20%;
}

.copia-table-row {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

#table-heading .order-id,
.copia-table-row .order-number {
  width: 2%;
}

.link {
  margin: 15px 0;
  text-align: right;
  color: rgb(82, 82, 83);
}

.link a {
  font-weight: bold;
  color: #0d05fc;
}

.search {
  width: auto;
  padding: 5px;
  display: flex;
  margin: 0 auto;

  input {
    outline: none;
    background: color(dark, shade1);
    border-radius: 20px;
    min-height: 36px;
    width: 300px;
    color: color(white);
    padding: 12px;
  }
}

img {
  margin-left: 5px;
}
</style>
