import React from "react";

export default function Votacao({
  i,
  pergunta,
  opcoes,
  onEdit,
  onRemove,
  onVote
}) {
  return (
    <div key={i}>
      <p>
        Pergunta: {pergunta} <button onClick={() => onVote(i)}>Votar</button>
        <button onClick={() => onEdit(i)}>Editar</button>
        <button onClick={() => onRemove(i)}>Remover</button>
      </p>
      <p>
        Respostas:
        {opcoes.map((op, i) => {
          return (
            <span key={i}>
              {op.opcao}
              {i === opcoes.length - 1 ? "" : "/"}
            </span>
          );
        })}
      </p>
    </div>
  );
}
