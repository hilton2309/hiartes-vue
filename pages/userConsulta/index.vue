<template>
  <div>
    <UserTemplate />
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
      await users.index()
    } catch {
      return redirect('/404')
    }
  }
})
</script>

<style lang="scss" scoped></style>
