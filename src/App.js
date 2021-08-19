import VotacaoCard from './VotacaoCard';
import VotacaoForm from './VotacaoForm';
import {useState} from 'react';
import VotacaoList from './VotacaoList';


function App() {
  const votacoes= [{pergunta: "Pegunta 11",opcoes : [{opcao: "não", quantidade: 10}, {opcao: "sim", quantidade: 1}]}, {pergunta: "Pegunta 122",opcoes : [{opcao: "não", quantidade: 10}, {opcao: "sim", quantidade: 1}]}]

  return (
    <div>
          <VotacaoList votacoes={votacoes}/>    
    </div>
  );
}

export default App;
