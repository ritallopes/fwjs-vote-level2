import React from 'react';
import Cabine from './Cabine';
import Resultado from './Resultado';
import {useState} from 'react';
import PropTypes from 'prop-types';


export default function VotacaoCard({ texto, estado, opcoes }) {
	const [resposta, setResposta] = useState(null);
	function onVoto(i) {
		setResposta(i-1);
		opcoes[i-1].quantidade++;
	}

	return (
		<div style={{ boxSizing: "content-box", width: "80%", display: "inline-block", borderRadius: "15px", backgroundColor: "#cccccc", padding: "30px", margin: "0" }}>
			<h1>{texto}</h1>
			{
				resposta === null && estado==='open' ? <Cabine opcoes={opcoes} onVoto={onVoto} /> : <Resultado opcoes={opcoes} />
			}
			
		</div>
	)
}

VotacaoCard.propTypes = {
	texto: PropTypes.string,
	opcoes: PropTypes.array,
	onVoto: PropTypes.func,
	estado: PropTypes.oneOf(['open', 'closed']),
  };