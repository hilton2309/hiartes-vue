<template>
  <div>
    <AboutTemplate />

  </div>
</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({

  layout: 'hiartes',
  middleware: 'auth',

})
</script>



