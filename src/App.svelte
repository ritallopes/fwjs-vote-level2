<script>
	import VotacaoCard from './VotacaoCard.svelte'	;
	let t= "Dia lindoooo?";
    let e= 'open';
    let o= [{ opcao: "Realmente", quantidade: 1 }, { opcao: "Com certeza", quantidade: 99}];
</script>

<main>
	<VotacaoCard texto={t} estado={e} opcoes={o}/>
</main>

<style>
	
</style>