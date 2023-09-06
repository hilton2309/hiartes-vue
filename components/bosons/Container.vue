<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0px auto;
  max-width: 1070px;
  min-height: 400px;

  @include screen('small') {
    width: 90%;
  }

  @include screen('medium') {
    width: 85%;
  }

  @include screen('large', 'infinity') {
    width: 70%;
  }
}
</style>
