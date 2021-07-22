import MyVotacaoCard from '../components/VotacaoCard';

export default {
  title: 'Votacao/VotacaoCard',
  component: MyVotacaoCard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyVotacaoCard },
  template:
    '<MyVotacaoCard :texto="texto" :opcoes="opcoes" :estado="estado" />',
});

export const Open = Template.bind({});
Open.args = {
    texto: "Dia lindoooo?",
    estado: 'open',
    opcoes: [{ opcao: "Realmente", quantidade: 1 }, { opcao: "Com certeza", quantidade: 99}]
};
export const Closed = Template.bind({});
Closed.args = {
    texto: "Noite legal?",
    estado: 'closed',
    opcoes: [{ opcao: "Realmente", quantidade: 10 }, { opcao: "Talvez", quantidade: 0}]
};
