import { Component, Input } from '@angular/core';

@Component({
  selector: 'resultado',
  template:`<p *ngFor="let op of opcoes; index as idx">
            {{idx}}. {{op.opcao}} - {{op.quantidade}} ({{calcular(op.quantidade)}}%)
          </p>`
})

export class ResultadoComponent {
  @Input() opcoes?: Array<{opcao: string, quantidade: number}>
  calcular(q:number){
    let total = 0;
    let reducer = (acc:number, current:number) => acc + current;
    if(this.opcoes){
      total = this.opcoes.map(v => { return v.quantidade }).reduce(reducer);
    }
    return Math.round(q*100/total);
  }
}
