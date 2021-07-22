import { Component, Input } from '@angular/core';

@Component({
  selector: 'votacaocard',
  template: `
  <h1>{{texto}}</h1>
  <div *ngIf="estado === 'open'; else resultado">
    <cabine [opcoes]="opcoes" (voto)="onVoto($event)"></cabine>
  </div>
  <ng-template #resultado>
    <resultado [opcoes]="opcoes"></resultado>
  </ng-template>
  `
})
export class VotacaoCardComponent {
  @Input() opcoes?: Array<{opcao: string, quantidade: number}>
  @Input() estado?: string
  @Input() texto?: string

  onVoto(index: number){
    if(this.opcoes){
      this.opcoes[index-1].quantidade++;
      this.estado = 'closed'
    }
  }

}

