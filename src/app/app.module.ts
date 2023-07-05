import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ConcatNameVersionPipe } from './concat-name-version.pipe';
import { AnimacaoComponent } from './animacao/animacao.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AnimacaoComponent,
    ConcatNameVersionPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
