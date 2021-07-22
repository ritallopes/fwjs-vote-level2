<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Cabine from "../Cabine.svelte";
</script>

<Meta
  title="Votacao/Cabine"
  component={Cabine}
  argTypes={{
    onVote: { action: "onVote" },
  }}
/>

<Template let:args>
  <Cabine
    {...args}
    on:vote={args.onVote}
  />
</Template>

<Story
  name="Exemplo 1"
  args={{
    opcoes: [{ opcao: 'Realmente', quantidade: 1 }, { opcao: 'Com certeza', quantidade: 99 }, { opcao: 'Certamene', quantidade: 9 }] 
  }}
/>

<Story name="Exemplo 2" args={{
  opcoes: [{ opcao: 'Realmente', quantidade: 10 }, { opcao: 'Talvez', quantidade: 0 }] 
  }} />
