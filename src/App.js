import VotacaoCard from './VotacaoCard';
import {useState} from 'react';


function App() {
  const opcoes = [{opcao: "não", quantidade: 10}, {opcao: "sim", quantidade: 1}]
  const [estado] = useState('open');

  return (
    <div>
      <header >
        <p>
          <VotacaoCard texto="titulooo" open={true} opcoes={opcoes}/>
        </p>
      </header>
    </div>
  );
}

export default App;
