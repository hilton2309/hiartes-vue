<template>
  <div>
    <div class="search">
      <input v-model="texto" type="text" placeholder="Buscar" />
      <img src="@/assets/img/Search.svg" alt="Buscar" />
      <input v-model="data1" class="data" type="date" value="data1" />
      <input v-model="data2" class="data" type="date" value="data2" />
      <button @click="limpar">Limpar</button>
    </div>

    <div id="total">
      <span>Total de Copias P/B:</span>
      {{ total.toLocaleString('pt-BR') }}
    </div>

    <div id="total">
      <span>Total de Copias Color:</span>
      {{ total2.toLocaleString('pt-BR') }}
    </div>

    <table class="minha-tabela">
      <thead>
        <tr>
          <th>id</th>
          <th>Qunatidade</th>
          <th>Tipo</th>
          <th>Setor</th>
          <th>Observação</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="copia in filteredItems()"
          :key="copia.id"
          class="order-number"
        >
          <td>{{ copia.id }}</td>
          <td>{{ copia.amount }}</td>
          <td>{{ copia.type }}</td>
          <td>{{ copia.sectors.sector }}</td>
          <td>{{ copia.comment }}</td>
          <td>
            {{ formatDate(copia.created_at) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { copies } from '@/store'
import { Copy, Sector } from '@/models'

// Date(copia.created_at).toLocaleDateString('pt-BR')

export default Vue.extend({
  data() {
    return {
      setor: [] as Sector[],
      copias: [] as Copy[],
      texto: '',
      total: 0,
      total2: 0,
      data1: '',
      data2: ''
    }
  },

  beforeUpdate() {
    this.valor()
    // total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) exemplo de valor com '.' e ',' e R$
  },

  mounted() {
    this.copiesall()
    this.valor()
    this.dataInicial()
    this.dataFinal()
  },

  methods: {
    valor() {
      this.total = this.filteredItems().reduce((acc, item) => {
        if (item.sectors.sector && item.type === 'normal') {
          return acc + item.amount
        } else {
          return acc
        }
      }, 0)
      this.total2 = this.filteredItems().reduce((acc, item) => {
        if (item.sectors.sector && item.type === 'color') {
          return acc + item.amount
        } else {
          return acc
        }
      }, 0)
    },

    dataInicial() {
      const today = new Date()
      const year = today.getFullYear()
      const month = String(today.getMonth() + 1).padStart(2, '0')
      const day = String(today.getDate()).padStart(2, '0')
      const formattedDate = `${year}-${month}-${day}`
      this.data2 = formattedDate
    },

    dataFinal() {
      const today = new Date()
      const year = today.getFullYear()
      const month = String(today.getMonth() + 1).padStart(2, '0')
      const day = String('1').padStart(2, '0')
      const formattedDate = `${year}-${month}-${day}`
      this.data1 = formattedDate
    },

    formatDate(dateString: Date) {
      const date = new Date(dateString)
      const offset = date.getTimezoneOffset()
      const dateUtc = new Date(date.getTime() + offset * 60 * 1000)

      return dateUtc.toLocaleDateString()
    },

    copiesall() {
      const data = Object.values(copies.$all)
      this.copias = data
    },

    limpar() {
      this.texto = ''
      this.dataInicial()
      this.dataFinal()
    },

    // Exemplo --------------->
    //
    //   filteredItems() {
    //     let items = [];
    //     items = this.items.filter((item) => {
    //       return (
    //         item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
    //         item.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1
    //       );
    //     });

    //     items = items.filter((item) => {
    //       if (this.selected == null) return item;
    //       return item.isActive === this.selected;
    //     });

    //     return items;
    //   },

    // -----------------------------------------------------
    // filteredItems() {
    //   return this.items
    //     .filter(item => item.category === this.selectedCategory)
    //     .filter(item => item.price <= this.maxPrice)
    //     .filter(item => item.rating >= this.minRating);
    // }

    filteredItems(): Copy[] {
      return this.copias.filter(
        (item) =>
          item.sectors.sector
            .toLowerCase()
            .includes(this.texto.toLowerCase()) &&
          item.created_at.toString().slice(0, 10) >= this.data1 &&
          item.created_at.toString().slice(0, 10) <= this.data2
      )
    }
  }
})

// const data = new Date();
// const dia = data.getDate().toString().padStart(2, '0');
// const mes = (data.getMonth() + 1).toString().padStart(2, '0');
// const ano = data.getFullYear().toString();
// const dataFormatada = `${dia}-${mes}-${ano}`;
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  padding: 5px;
  border-bottom: solid #333;
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

  button {
    margin-left: 10px;
    border-radius: 20px;
    padding: 10px;
    background: linear-gradient(to bottom, #e6e6e6, #ffffff);
    border: 1px solid #adadad;
    border-bottom: 3px solid #adadad;
    box-shadow: 2px 2px 2px #adadad, 3px 3px 3px #ffffff;
    font-size: 14px;
    font-weight: bold;
    transition: 0.2s;
    color: color(dark, shade1);
    cursor: pointer;

    &:active {
      background: rgb(216, 242, 253);
      box-shadow: 1px 1px 1px #adadad, 2px 2px 2px #ffffff;
    }
  }
}

button:hover {
  background: linear-gradient(to bottom, #e6e6e6, #ffffff);
  border: 1px solid #adadad;
  border-bottom: 3px solid #adadad;

  //font-size: 13px;
}

.minha-tabela {
  margin: 20px auto;
  border-collapse: collapse;
  border-radius: 5px;
  table-layout: auto;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  background-color: white;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 2px solid #ddd;
  }

  th:nth-child(1),
  td:nth-child(1) {
    width: 5%;
    text-align: right;
  }

  th:nth-child(2),
  td:nth-child(2) {
    text-align: right;
    width: 10%;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 10%;
  }

  th:nth-child(4),
  td:nth-child(4) {
    width: 25%;
  }

  th:nth-child(5),
  td:nth-child(5) {
    width: 40%;
  }

  th:nth-child(6),
  td:nth-child(6) {
    width: 10%;
  }

  th {
    background-color: #f2f2f2;
    color: #333;
  }

  tr:nth-child(even) {
    background-color: #d6eeee;
  }

  tr:hover {
    background-color: #d6eeee; // Muda a cor da linha quando o mouse passa
  }
}

#total {
  display: inline-block;
  margin: 10px 10px;
  font-size: 18px;
  color: red;
  font-weight: bold;

  span {
    color: #333;
  }
}

.data {
  margin: 0 10px;
  max-width: 150px;
}
</style>
