import { useState } from "react";

export default function useVotacoes(props) {
  const [votacoes, setVotacoes] = useState(props?props:[]);

  const adicionarVotacao = () => {
    const novaVotacao = { pergunta: "", opcoes: [] };
    setVotacoes([...votacoes, novaVotacao]);
  };
  const removerVotacao = index => {
    setVotacoes([...votacoes.slice(0, index), ...votacoes.slice(index + 1)]);
  };

  const atualizarVotacao = (votacao, index) => {
      setVotacoes([
      ...votacoes.slice(0, index),
      votacao,
      ...votacoes.slice(index + 1)
    ]);
  };

  return{votacoes, adicionarVotacao, atualizarVotacao, removerVotacao}
}
