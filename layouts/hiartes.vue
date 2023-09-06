<template>
  <div class="hiartes">
    <Header :nome="user.username" />
    <div id="marges"></div>

    <Container>
      <Nuxt />
    </Container>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { users } from '@/store'

export default Vue.extend({
  data() {
    return {
      user: { ...users.$single }
    }
  }
})
</script>

<style lang="scss" scoped>
#marges {
  width: 100%;
  height: 100px;
}

// .hiartes-layout {
//   margin-top: 4.313rem;
//   display: grid;
//   grid-gap: 6.75rem;
// }
</style>
