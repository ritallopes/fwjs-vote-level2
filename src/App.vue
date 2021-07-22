<template>
  <div id="app">
    <VotacaoCard :titulo="titulo" :opcoes="opcoes" :estado="estado"></VotacaoCard>
  </div>
</template>

<script>
import VotacaoCard from './components/VotacaoCard';

export default {
  name: 'App',
  components: {
    VotacaoCard
  },
  data: function() {
    return {
      titulo: 'Pergunta??',
      opcoes: [{ opcao: "Realmente", quantidade: 10 }, { opcao: "Talvez", quantidade: 0}],
      estado: 'open'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
