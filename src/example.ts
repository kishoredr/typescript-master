import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

document.addEventListener('DOMContentLoaded', function() {
  let calendarEl: HTMLElement = document.getElementById('calendar')!;

  let calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    defaultDate: '2021-05-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2021-05-01',
      },
      {
        title: 'Long Event',
        start: '2021-05-07',
        end: '2021-05-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2021-05-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2021-05-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2021-05-11',
        end: '2021-05-13'
      },
      {
        title: 'Meeting',
        start: '2021-05-12T10:30:00',
        end: '2021-05-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2021-05-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2021-05-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2021-05-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2021-05-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2021-05-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2021-05-28'
      }
    ]
  });

  calendar.render();
});
