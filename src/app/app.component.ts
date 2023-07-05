import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  name1 = 'Angular ' + VERSION.major;
  contadorName2 = 0;

  get name2() {
    this.contadorName2++;
    console.log(
      'Numero de vezes que o método "name2" é chamado',
      this.contadorName2
    );
    return 'Angular ' + VERSION.major;
  }
}
