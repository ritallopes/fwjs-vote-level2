<script>
	export let opcoes;
	import {createEventDispatcher} from 'svelte';
	const dispatcher = createEventDispatcher();
</script>

<main>
	{#each opcoes as opcao, index (opcao)}
	<button on:click={dispatcher('vote', index)}>{opcao.opcao}</button>
	{/each}
</main>

<style>
	
</style>