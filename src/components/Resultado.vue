<template>
  <div>
	<p v-for="(opcao,i) in opcoes" :key="i">
	{{i+1}}. {{opcao.opcao}} - {{opcao.quantidade}} ({{calcular(opcao.quantidade)}}%)
	</p>
  </div>
</template>

<script>
export default {
  name: 'Resultado',
  props: ['opcoes'],
  methods:{
	calcular(q){
		let total = 0;
		let reducer = (acc, current) => acc + current;
		if(this.opcoes){
		total = this.opcoes.map(v => { return v.quantidade }).reduce(reducer);
		}
		return Math.round(q*100/total);
	}
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
