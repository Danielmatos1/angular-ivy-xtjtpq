import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animacao',
  templateUrl: './animacao.component.html',
  styleUrls: ['./animacao.component.css'],
})
export class AnimacaoComponent {
  animado = 0;

  aumentarAnimacao() {
    this.animado++;
  }
}
