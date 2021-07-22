import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'cabine',
  template:`
  <button *ngFor="let op of opcoes; index as idx" (click)="voto.emit(idx+1)">
    {{op.opcao}}
  </button>
  `
})
export class CabineComponent {
  @Input() opcoes?: Array<{opcao: string, quantidade: number}>
  @Output() voto = new EventEmitter()

}
