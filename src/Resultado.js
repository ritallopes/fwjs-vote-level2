import React from 'react';

export default function Resultado({texto, opcoes}){
	const reducer = (acc, current) => acc + current;
	let total = opcoes.map(v =>{ return v.quantidade}).reduce(reducer);
	return(
		<div>
			<h2>{texto}</h2>
		{opcoes && opcoes.map((voto, i) => {
					return (
						<p key={i}>
					{`${i+1}. ${voto.opcao} - ${voto.quantidade} (${Math.round(voto.quantidade * 100 /total)}%)`}
				</p>
					)
				})
		}
		</div>
	)
}