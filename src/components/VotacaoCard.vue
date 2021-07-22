<template>
  <div>
    <h1>{{texto}}</h1>
    <Cabine :opcoes="opcoes" v-if="estado == 'open'" @vote="vote"></Cabine>
    <Resultado :opcoes="opcoes" v-else></Resultado>
  </div>
</template>

<script>
import Cabine from './Cabine';
import Resultado from './Resultado';

export default {
  name: 'VotacaoCard',
  components: {
    Cabine,
    Resultado
  },
  props:['opcoes', 'estado', 'texto'],
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
