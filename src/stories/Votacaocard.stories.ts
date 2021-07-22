import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import {VotacaoCardComponent} from '../app/votacaocard.component';
import {CabineComponent} from '../app/cabine.component';
import {ResultadoComponent} from '../app/resultado.component';

export default {
  title: 'Votacao/VotacaoCard',
  component: VotacaoCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CabineComponent, ResultadoComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<VotacaoCardComponent> = (args: VotacaoCardComponent) => ({
  props: args,
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
