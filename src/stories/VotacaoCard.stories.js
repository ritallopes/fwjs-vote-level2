import React from 'react';

import VotacaoCard from './../VotacaoCard';



export default {
    title: 'Votacao/VotacaoCard',
    component: VotacaoCard,
    argTypes: { onExit: { action: 'clicked' }},

};

const Template = (args) => <VotacaoCard {...args} />;

export const Open = Template.bind({});
Open.args = {
    texto: "Dia lindoooo?",
    estado: 'open',
    opcoes: [{ opcao: "Realmente", quantidade: 1 }, { opcao: "Com certeza", quantidade: 99}, { opcao: "Talvez", quantidade: 98}]
};
export const Closed = Template.bind({});
Closed.args = {
    texto: "Noite legal?",
    estado: 'closed',
    opcoes: [{ opcao: "Realmente", quantidade: 10 }, { opcao: "Talvez", quantidade: 0}]
};

