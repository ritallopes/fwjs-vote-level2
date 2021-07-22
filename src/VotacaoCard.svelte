<script>
	import Cabine from "./Cabine.svelte";
	import Resultado from "./Resultado.svelte";
	export let estado;
	export let texto;
	export let opcoes;

	function onVote(index){
		opcoes[index.detail].quantidade++;
		estado=estado==='open'?'closed':'open';
	}
</script>

<style>
</style>

<main>
	<h1>{texto}</h1>
	{#if estado === 'open'}
		<Cabine on:vote={onVote} {opcoes} />
	{:else}
		<Resultado {opcoes} />
	{/if}
</main>
