<template>
  <div class="box">
    <HomeTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { users } from '@/store'

export default Vue.extend({
  layout: 'hiartes'
  // middleware: 'auth',

  // async asyncData({ redirect }) {
  //   try {
  //     await users.show()
  //   } catch {
  //     return redirect('/404')
  //   }
  // }
})
</script>
