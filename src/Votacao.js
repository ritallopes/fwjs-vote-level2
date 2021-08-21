import React from "react";
import PropTypes from 'prop-types';


export default function Votacao({
  index,
  pergunta,
  opcoes,
  onEdit,
  onRemove,
  onVote
}) {
  return (
    <div key={index}>
      <p>
        Pergunta: {pergunta} <button onClick={() => onVote(index)}>Votar</button>
        <button onClick={() => onEdit(index)}>Editar</button>
        <button onClick={() => onRemove(index)}>Remover</button>
      </p>
      <p>
        Respostas:
        {opcoes.map((op, i_) => {
          return (
            <span key={i_}>
              {op.opcao}
              {i_ === opcoes.length - 1 ? "" : "/"}
            </span>
          );
        })}
      </p>
    </div>
  );
}

Votacao.propTypes = {
	opcoes: PropTypes.array,
  onVote: PropTypes.func,
  index: PropTypes.string,
  pergunta: PropTypes.string,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};
