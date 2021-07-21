import VotacaoCard from './VotacaoCard';
import {useState} from 'react';


function App() {
  const opcoes = [{opcao: "não", quantidade: 10}, {opcao: "sim", quantidade: 1}]
  return (
    <div>
      <header >
        <p>
          <VotacaoCard texto="titulooo" estado='open' opcoes={opcoes}/>
        </p>
      </header>
    </div>
  );
}

export default App;
