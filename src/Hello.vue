<template>
  <div>
    <input v-model="msg">
    <div>Hello {{msg}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Vue'
      }
    }
  }
</script>
