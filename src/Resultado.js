import React from 'react';
import PropTypes from 'prop-types';

export default function Resultado({ opcoes }) {
	const reducer = (acc, current) => acc + current;
	let total = opcoes.map(v => { return v.quantidade }).reduce(reducer);
	return (
		<div>
			{opcoes && opcoes.map((voto, i) => {
				return (
					<p key={i}>
						{`${i + 1}. ${voto.opcao} - ${voto.quantidade} (${Math.round(voto.quantidade * 100 / total)}%)`}
					</p>
				)
			})
			}
		</div>
	)
}


Resultado.propTypes = {
	opcoes: PropTypes.array,
};