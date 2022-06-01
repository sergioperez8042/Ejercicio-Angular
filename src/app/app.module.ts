import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataComponent } from './components/turnos/data.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CambiarHorarioService } from './strategies-services/cambiar-horario.service';
import { FactoryService } from './strategies-services/factory.service';

@NgModule({
  declarations: [AppComponent, DataComponent, FilterPipe],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [CambiarHorarioService, FactoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
