<template>
  <div>
    <h1>{{votacoes}}</h1>
    
  </div>
</template>

<script>

export default {
  name: 'VotacaoList',
  components: {
   
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
