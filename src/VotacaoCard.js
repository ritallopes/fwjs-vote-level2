import React from 'react';
import Cabine from './Cabine';
import Resultado from './Resultado';
import {useState} from 'react';

export default function VotacaoCard({ texto, open, opcoes, onVoto }) {
	const [resposta, setResposta] = useState(null);
	function responder(i) {
		setResposta(i);
		opcoes[i].quantidade++;
	}

	return (
		<div style={{ boxSizing: "content-box", width: "80%", display: "inline-block", borderRadius: "15px", backgroundColor: "#cccccc", padding: "30px", margin: "0" }}>
			<h1>{texto}</h1>
			{
				resposta === null && open ? <Cabine opcoes={opcoes} onSelect={responder} /> : <Resultado opcoes={opcoes} />
			}
			
		</div>
	)
}