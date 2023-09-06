<template>
  <div class="message-container">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'MessaGe',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.message-container {
  color: #004085;
  background-color: #ffcccc;
  border: 2px solid #ff7d7d;
  border-radius: 7px;
  padding: 10px;
  max-width: 300px;
  margin: auto;
  text-align: center;
  box-shadow: 3px 2px 6px 2px rgba(69, 137, 247, 0.25);
}
</style>
