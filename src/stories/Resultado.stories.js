import React from 'react';

import Resultado from './../Resultado';

export default {
    title: 'Votacao/Resultado',
    component: Resultado,
};

const Template = (args) => <Resultado {...args} />;

export const Exemplo1 = Template.bind({});
Exemplo1.args = {
    opcoes: [{ opcao: "Realmente", quantidade: 10 }, { opcao: "Com certeza", quantidade: 100}, { opcao: "Nem sei", quantidade: 0}]
};
export const Exemplo2 = Template.bind({});
Exemplo2.args = {
    opcoes: [{ opcao: "Realmente", quantidade: 10 }, { opcao: "Talvez", quantidade: 0}]
};
