import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AgendaUtilsModule } from '../agenda-utils/module';
import { Http,HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AgendaComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { ConsultaService } from './consulta.service';
import localePt from '@angular/common/locales/pt';


registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    AgendaUtilsModule,
    BrowserModule,
   NoopAnimationsModule,
   HttpModule,
   
  ],
  providers:[ConsultaService],
  declarations: [AgendaComponent],
  exports: [AgendaComponent],
  bootstrap: [AgendaComponent] 
})
export class AgendaModule {}
