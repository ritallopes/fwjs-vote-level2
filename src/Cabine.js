import React from 'react';

export default function Cabine({ opcoes, onSelect }) {
	return (
		<div style={{ display: "block" }}>
			<div>
				{opcoes && opcoes.map((voto, i) => {
					return (
						<button key={i} onClick={()=> onSelect(i)}>
							{voto.opcao}
						</button>
					)
				})}
			</div>
		</div>
	)
}