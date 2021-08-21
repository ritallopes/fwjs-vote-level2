<template>
  <div>
    <h1>{{votacoes[0].pergunta}}</h1>
    
  </div>
</template>

<script>
import VotacaoCard from './VotacaoCard';
import VotacaoForm from './VotacaoForm';

export default {
  name: 'VotacaoList',
  components: {
    VotacaoCard,
    VotacaoList
  },
  props:['votacoes'],
  methods:{
      vote(index){
        if(this.opcoes){
            this.opcoes[index-1].quantidade++;
            this.estado = 'close';
        }
      }
  },
  computed:{
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
