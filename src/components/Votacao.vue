<template>
  <div>
    <button v-for="(opcao,i) in opcoes" :key="i" @click="$emit('vote', i+1)">{{opcao.opcao}}</button>
  </div>
</template>

<script>
export default {
  name: 'Votacao',
  props: ['opcoes']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
