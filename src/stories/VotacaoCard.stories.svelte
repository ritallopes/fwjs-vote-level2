<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import VotacaoCard from "../VotacaoCard.svelte";
</script>

<Meta
  title="Votacao/VotacaoCard"
  component={VotacaoCard}
  argTypes={{ onVote: { action: 'onVote' } }} />

<Template let:args>
  <VotacaoCard {...args} on:vote={args.onVote} />
</Template>

<Story
  name="Exemplo 1"
  args={{ texto: 'Dia lindoooo?', estado:['open', 'closed'][0], opcoes: [{ opcao: 'Realmente', quantidade: 1 }, { opcao: 'Com certeza', quantidade: 99 }, { opcao: 'Certamene', quantidade: 9 }] }} />

<Story
  name="Exemplo 2"
  args={{ texto: 'Noite legal?', estado: 'closed', opcoes: [{ opcao: 'Realmente', quantidade: 10 }, { opcao: 'Talvez', quantidade: 0 }] }} />
