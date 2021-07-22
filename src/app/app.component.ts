import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<votacaocard [texto]="texto" [opcoes]="opcoes" [estado]="estado"></votacaocard>'
})
export class AppComponent {
  texto = 'Uma pergunta';
  opcoes = [{opcao: "não", quantidade: 10}, {opcao: "sim", quantidade: 1}];
  estado = 'open';
}
