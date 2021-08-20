import React, { useState } from "react";
import VotacaoForm from "./VotacaoForm";
import Votacao from "./Votacao";
import VotacaoCard from "./VotacaoCard";
import useVotacoes from './votacoes-hooks';

export default function VotacaoList(props) {
  const [mode, setMode] = useState("view");
  const [current, setCurrent] = useState(null);
  const {votacoes, adicionarVotacao, atualizarVotacao, removerVotacao } = useVotacoes();

  function editVotacao(index) {
    setMode("edit");
    setCurrent(index);
  }
  const addVotacao = () => {
    adicionarVotacao();
    setCurrent(votacoes.length);
    setMode('add');
  }
  const deleteVotacao = (index) => {
    removerVotacao(index);
  }
  const realizarVotacao = (index) => {
    setCurrent(index)
    setMode('vote')
  }

  const salvarMudancas = (votacao) => {
    atualizarVotacao(votacao, current);
    setMode('view');
  }

  const cancelarMudancas = () => {
    if (mode === 'add') {
        removerVotacao(votacoes.length - 1)
      }
      setMode('view');
  }

  return (
    <>
      {mode === "view" && (
        <div>
          <button onClick={addVotacao}>Adicionar Votacao</button>
          {votacoes.map((votacao, i) => {
            return (
              <Votacao
                i={i}
                pergunta={votacao.pergunta}
                opcoes={votacao.opcoes}
                onEdit={index => {
                  editVotacao(index);
                }}
                onRemove={index => {
                    deleteVotacao(index);
                }}
                onVote={index => {
                   realizarVotacao(index);
                }}
              />
            );
          })}
        </div>
      )}

      {(mode === 'edit' || mode === 'add') && <VotacaoForm votacao={votacoes[current]} onUpdate={(votacao) => salvarMudancas(votacao)} onCancel={() => cancelarMudancas()}/>}

      {mode === 'vote' && <VotacaoCard texto={votacoes[current].pergunta} estado={'open'} opcoes={votacoes[current].opcoes} />}
    </>
  );
}
