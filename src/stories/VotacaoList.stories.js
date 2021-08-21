import React from 'react';

import VotacaoList from '../VotacaoList';


export default {
    title: 'Votacao/VotacaoList',
    component: VotacaoList,
};

const Template = (args) => <VotacaoList {...args} />;

export const Exemplo1 = Template.bind({});
Exemplo1.args = {
    votacoes:[{pergunta: "Tudo bem?",opcoes : [{opcao: "não", quantidade: 10},{opcao: "talvez", quantidade: 11}, {opcao: "sim", quantidade: 1}]}, {pergunta: "Este semestre tem 3 meses?",opcoes : [{opcao: "não", quantidade: 10}, {opcao: "sim", quantidade: 1}]}]
};

export const Exemplo2 = Template.bind({});
Exemplo2.args = {
};


