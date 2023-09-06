<template>
  <div>
    <PrivateTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { users } from '@/store'

export default Vue.extend({
  layout: 'private',
  middleware: 'auth',

  async asyncData({ redirect }) {
    try {
      await users.show()
      if (users.$single.category !== 'admin') {
        alert('Usuário não autorizado')
        return redirect('/')
      }
    } catch {
      return redirect('/404')
    }
  }
})
</script>

<style scoped></style>
