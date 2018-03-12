import { Injectable } from '@angular/core';
import { Http,HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { CalendarEvent } from 'angular-calendar';



@Injectable()
export class ConsultaService {

  constructor(private http:Http) { }

  findAll(){
   return this.http.get('http://localhost:8080/abcMedicaApi/rest/consulta')
    .map(response =>response.json())
    .toPromise()
}
findAllPatient(){
    return this.http.get('http://localhost:8080/abcMedicaApi/rest/paciente')
     .map(response =>response.json())
     .toPromise()
 }
 findAllDoctor(){
    return this.http.get('http://localhost:8080/abcMedicaApi/rest/medico')
     .map(response =>response.json())
     .toPromise()
 }
saveNew(calendarEvent:CalendarEvent){
  return this.http.post('http://localhost:8080/abcMedicaApi/rest/consulta',calendarEvent)
   .map(response =>response.json())
   .toPromise()
}
save(calendarEvent:CalendarEvent){
    console.log(calendarEvent);
  return this.http.put('http://localhost:8080/abcMedicaApi/rest/consulta',calendarEvent)
   .map(response =>response.json())
   .toPromise()
}
 deletar(calendarEvent:CalendarEvent){
     
   return this.http.delete(`http://localhost:8080/abcMedicaApi/rest/consulta/${calendarEvent.id}`)
    .map(response =>response.json())
    .toPromise()
}



}