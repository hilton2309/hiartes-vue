<template>
  <div>
    <CopiesResumoTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { copies, sector } from '@/store'

export default Vue.extend({
  layout: 'hiartes',
  middleware: 'auth',

  async asyncData({ redirect }) {
    try {
      await copies.index()
      await sector.index()
    } catch {
      return redirect('/404')
    }
  }
})
</script>
