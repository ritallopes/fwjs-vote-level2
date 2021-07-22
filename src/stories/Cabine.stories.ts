import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import {CabineComponent} from '../app/cabine.component';

export default {
  title: 'Votacao/Cabine',
  component: CabineComponent,
  decorators: [
    moduleMetadata({
      declarations: [CabineComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<CabineComponent> = (args: CabineComponent) => ({
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

