import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import {ResultadoComponent} from '../app/resultado.component';

export default {
  title: 'Votacao/Resultado',
  component: ResultadoComponent,
  decorators: [
    moduleMetadata({
      declarations: [ResultadoComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<ResultadoComponent> = (args: ResultadoComponent) => ({
  props: args,
});


export const Exemplo1 = Template.bind({});
Exemplo1.args = {
    opcoes: [{ opcao: "Realmente", quantidade: 10 }, { opcao: "Com certeza", quantidade: 100}, { opcao: "Nem sei", quantidade: 0}]
};
export const Exemplo2 = Template.bind({});
Exemplo2.args = {
    opcoes: [{ opcao: "Realmente", quantidade: 10 }, { opcao: "Talvez", quantidade: 0}]
};

