import Resultado from '../components/Resultado';

export default {
  title: 'Votacao/Resultado',
  component: Resultado,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Resultado },
  template:
    '<Resultado :opcoes="opcoes"/>',
});

export const Exemplo1 = Template.bind({});
Exemplo1.args = {
    opcoes: [{ opcao: "Realmente", quantidade: 10 }, { opcao: "Com certeza", quantidade: 100}, { opcao: "Nem sei", quantidade: 0}]
};
export const Exemplo2 = Template.bind({});
Exemplo2.args = {
    opcoes: [{ opcao: "Realmente", quantidade: 10 }, { opcao: "Talvez", quantidade: 0}]
};
