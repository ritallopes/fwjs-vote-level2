import React from 'react';

import Votacao from './../Votacao';



export default {
    title: 'Votacao/Votacao',
    component: Votacao,
    argTypes: { onVote: { action: 'clicked' }, onEdit: {action: 'clicked'}, onRemove:{action:'clicked'} },
};

const Template = (args) => <Votacao {...args} />;

export const Exemplo1 = Template.bind({});
Exemplo1.args = {
    index : 200, 
    pergunta: "Dia lindoooo?",
    opcoes: [{ opcao: "Realmente", quantidade: 1 }, { opcao: "Com certeza", quantidade: 99}, { opcao: "Talvez", quantidade: 98}],
};

export const Exemplo2 = Template.bind({});
Exemplo2.args = {
    index : 1, 
    pergunta: "Outra Pergunta?",
    opcoes: [{ opcao: "Sim", quantidade: 1 }, { opcao: "Por favor", quantidade: 99}, { opcao: "Talvez", quantidade: 1}, { opcao: "Já deu", quantidade: 8}],
};

