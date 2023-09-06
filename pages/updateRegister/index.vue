<template>
  <div>
    <UpdateRegisterTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { units } from '@/store'

export default Vue.extend({
  layout: 'hiartes',
  middleware: 'auth',

  async asyncData({ redirect }) {
    try {
      await units.index()
    } catch {
      return redirect('/404')
    }
  }
})
</script>

<style lang="scss" scoped></style>
