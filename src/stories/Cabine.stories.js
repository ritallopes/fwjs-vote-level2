import React from 'react';

import Cabine from './../Cabine';

export default {
    title: 'Votacao/Cabine',
    component: Cabine,
    argTypes: { onVoto: { action: 'clicked' } },
};

const Template = (args) => <Cabine {...args} />;

export const Exemplo1 = Template.bind({});
Exemplo1.args = {
    opcoes: [{ opcao: "Realmente", quantidade: 10 }, { opcao: "Com certeza", quantidade: 100}, { opcao: "Nem sei", quantidade: 0}]
};
export const Exemplo2 = Template.bind({});
Exemplo2.args = {
    opcoes: [{ opcao: "Realmente", quantidade: 10 }, { opcao: "Talvez", quantidade: 0}]
};
