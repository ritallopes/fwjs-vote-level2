import React from 'react';

import VotacaoForm from '../VotacaoForm';


export default {
    title: 'Votacao/VotacaoForm',
    component: VotacaoForm,
    argTypes: { onUpdate: { action: 'clicked' }, onEdit: {action: 'clicked'}, onRemove:{action:'clicked'} },
};

const Template = (args) => <VotacaoForm {...args} />;

export const Exemplo1 = Template.bind({});
Exemplo1.args = {
    vote: {
        pergunta: "Dia lindoooo?",
        opcoes: [{ opcao: "Realmente", quantidade: 1 }, { opcao: "Com certeza", quantidade: 99}, { opcao: "Talvez", quantidade: 98}]
    } 
};

export const Exemplo2 = Template.bind({});
Exemplo2.args = {
    vote: {
        pergunta: "Outra Pergunta?",
        opcoes: [{ opcao: "Sim", quantidade: 1 }, { opcao: "Por favor", quantidade: 99}, { opcao: "Talvez", quantidade: 1}, { opcao: "Já deu", quantidade: 8}],
    }
   
};

export const Exemplo3 = Template.bind({});
Exemplo3.args = {
    vote: { pergunta: "", opcoes: [] }
};

