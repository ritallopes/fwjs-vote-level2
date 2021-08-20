import React, { useState } from "react";
import VotacaoForm from "./VotacaoForm";
import Votacao from "./Votacao";
import VotacaoCard from "./VotacaoCard";
import useVotacoes from './votacoes-hooks';

export default function VotacaoList(props) {
  const votes= [{pergunta: "Pegunta 11",opcoes : [{opcao: "não", quantidade: 10}, {opcao: "sim", quantidade: 1}]}, {pergunta: "Pegunta 122",opcoes : [{opcao: "não", quantidade: 10}, {opcao: "sim", quantidade: 1}]}]

  const [mode, setMode] = useState("view");
  const [current, setCurrent] = useState(null);
  const {votacoes, adicionarVotacao, atualizarVotacao, removerVotacao } = useVotacoes(votes);

  function editVotacao(index) {
    setMode("edit");
    setCurrent(index);
  }
  const addVotacao = () => {
    adicionarVotacao();
    setMode('add');
    setCurrent(votacoes.length);
  }
  const deleteVotacao = (index) => {
    removerVotacao(index);
  }
  const realizarVotacao = (index) => {
    setCurrent(index);
    setMode('vote');
  }

  const salvarMudancas = (votacao) => {
    atualizarVotacao(votacao, current);
    setMode('view');
    setCurrent(current);
    console.log(votacoes[current])
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
