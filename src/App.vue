<template>
  <div id="app">
    <VotacaoList :votacoes="votacoes"></VotacaoList>
  </div>
</template>

<script>
import VotacaoList from './components/VotacaoList';

export default {
  name: 'App',
  components: {
    VotacaoList
  },
  data: function() {
    return {
    votacoes: [{pergunta: "Pegunta 11",opcoes : [{opcao: "não", quantidade: 10},{opcao: "talvez", quantidade: 11}, {opcao: "sim", quantidade: 1}]}, {pergunta: "Pegunta 122",opcoes : [{opcao: "não", quantidade: 10}, {opcao: "sim", quantidade: 1}]}]
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
