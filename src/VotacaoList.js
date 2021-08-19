import React, { useState } from "react";
import VotacaoForm from "./VotacaoForm";
import Votacao from "./Votacao";
import VotacaoCard from "./VotacaoCard";

export default function VotacaoList(props) {
  const [votacoes, setVotacoes] = useState(props.votacoes);
  const [mode, setMode] = useState("view");
  const [current, setCurrent] = useState(null);

  function editarVotacao(index) {
    setMode("edit");
    setCurrent(index);
    console.log(votacoes[index]);
  }
  const adicionarVotacao = () => {
    const novaVotacao = {pergunta:'',opcoes : []}
    setVotacoes([...votacoes, novaVotacao])
    setCurrent(votacoes.length)
    setMode('add')
  }
  const removerVotacao = (index) => {
    setVotacoes([... votacoes.slice(0, index), ...votacoes.slice(index + 1)])
  }
  const realizarVotacao = (index) => {
    setCurrent(index)
    setMode('vote')
  }

  const salvarMudancas = (votacao) => {
    setVotacoes([
      ...votacoes.slice(0, current),
      votacao,
      ...votacoes.slice(current + 1)
    ])
    setMode('view')
  }

  const cancelarMudancas = () => {
    if (mode === 'add') {
        removerVotacao(votacoes.length - 1)
      }
      setMode('view')
  }

  return (
    <>
      {mode === "view" && votacoes && (
        <div>
          <button onClick={adicionarVotacao}>Adicionar Votacao</button>
          {votacoes.map((votacao, i) => {
            return (
              <Votacao
                i={i}
                pergunta={votacao.pergunta}
                opcoes={votacao.opcoes}
                onEdit={index => {
                  editarVotacao(index);
                }}
                onRemove={index => {
                    removerVotacao(index);
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
