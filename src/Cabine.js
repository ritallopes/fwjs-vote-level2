import React from 'react';
import PropTypes from 'prop-types';


export default function Cabine({ opcoes, onVoto }) {
	return (
		<div style={{ display: "block" }}>
			<div>
				{opcoes && opcoes.map((voto, i) => {
					return (
						<button key={i} onClick={() => onVoto(i + 1)}>
							{voto.opcao}
						</button>
					)
				})}
			</div>
		</div>
	)
}

Cabine.propTypes = {
	opcoes: PropTypes.array,
	onVoto: PropTypes.func,
};