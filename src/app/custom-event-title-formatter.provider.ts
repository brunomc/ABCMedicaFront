import { LOCALE_ID, Inject } from '@angular/core';
import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
import { DatePipe } from '@angular/common';

export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
  constructor(@Inject(LOCALE_ID) private locale: string) {
    super();
  }

  

  month(event: CalendarEvent): string {
    return `<b>${new DatePipe(this.locale).transform(
      event.start,
      'h:mm a',
      this.locale
    )}</b> ${event.title} - Paciente: ${event.patient.nome} - Médico:  ${event.doctor.nome}`;
  }

  week(event: CalendarEvent): string {
    return `<b>${new DatePipe(this.locale).transform(
      `new Date(event.end)`,
      'h:m a',
      this.locale
    )}</b> ${event.title} Paciente: ${event.patient.nome} - Médico:  ${event.doctor.nome}`;
  }

  day(event: CalendarEvent): string {
    return `<b>${new DatePipe(this.locale).transform(
      `new Date(event.start)`,
      'h:m a',
      this.locale
    )}</b> ${event.title} Paciente: ${event.patient.nome} - Médico:  ${event.doctor.nome}`;
  }
}