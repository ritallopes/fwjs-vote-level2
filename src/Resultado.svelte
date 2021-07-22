<script>
	export let opcoes;

	function calcular(q) {
		var total = 0;
		let reducer = (acc, current) => acc + current;
		if (opcoes) {
			total = opcoes
				.map((v) => {
					return v.quantidade;
				})
				.reduce(reducer);
		}
		return Math.round((q * 100) / total);
	}
</script>

<style>
</style>

<main>
	{#each opcoes as opcao, index (opcao)}
		<p>
			{index+1}
			{opcao.opcao}
			-
			{opcao.quantidade}
			({calcular(opcao.quantidade)}%)
		</p>
	{/each}
</main>
