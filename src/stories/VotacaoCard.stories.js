import React from 'react';

import VotacaoCard, { Page } from './../VotacaoCard';


export default {
    title: 'Votacao/VotacaoCard',
    component: VotacaoCard,
    argTypes: { onVoto: { action: 'clicked' } },
};

const Template = (args) => <VotacaoCard {...args} />;

export const Open1 = Template.bind({});
Open1.args = {
    texto: "Dia lindoooo>",
    open: true,
    opcoes: [{ opcao: "Realmente", quantidade: 10 }, { opcao: "Com certeza", quantidade: 100}]
};
export const Open2 = Template.bind({});
Open2.args = {
    texto: "Noite legal?",
    open: true,
    opcoes: [{ opcao: "Realmente", quantidade: 10 }, { opcao: "Talvez", quantidade: 0}]
};