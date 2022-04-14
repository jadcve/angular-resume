import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LateralComponent } from './lateral/lateral.component';
import { CentroSuperiorComponent } from './centro-superior/centro-superior.component';
import { CentroInferiorComponent } from './centro-inferior/centro-inferior.component';
import { ErrorComponent } from './error/error.component';
import { EditorComponent } from './editor/editor.component';
import { ResumeFormalComponent } from './resume-formal/resume-formal.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
@NgModule({
  declarations: [
    AppComponent,
    LateralComponent,
    CentroSuperiorComponent,
    CentroInferiorComponent,
    ErrorComponent,
    EditorComponent,
    ResumeFormalComponent,
    CurriculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
