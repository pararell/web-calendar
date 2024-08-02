import { createCalendar } from "./create-calendar.js";
import {arrows} from "./templates/arrows.js";
import {calendarMonth} from "./templates/calendar-month.js";

export class WebCalendar extends EventTarget {
  constructor(months = 13) {
    super();
    this.weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    this.calendars = createCalendar(months);

    const calendarWrap = document.createElement("div");
    calendarWrap.className = "calendars";

    const arrowsWrap = document.createElement("div");
    arrowsWrap.className = "arrows";
    arrowsWrap.innerHTML = arrows;

    this.calendars.forEach((calendar, index) => {
      const calendarElement = document.createElement("div");
      calendarElement.className = "calendar";
      calendarElement.id = index;

      calendarElement.innerHTML = calendarMonth;

      calendarElement.querySelector(".calendar-month-name").innerHTML = calendar.month;
      calendarElement.querySelector(".calendar-year-name").innerHTML = calendar.year;

      const weekdaysElement = document.createElement("div");
      weekdaysElement.className = "calendar-weekdays-title";

      this.weekdays.forEach((weekday) => {
        const weekdayElement = document.createElement("div");
        weekdayElement.className = "calendar-weekday";
        weekdayElement.innerHTML = weekday;
        weekdaysElement.appendChild(weekdayElement);
      });
      calendarElement.appendChild(weekdaysElement);

      const daysElement = document.createElement("div");
      daysElement.className = "calendar-days-wrap";

      calendar.placeholders.forEach(() => {
        const dayElement = document.createElement("div");
        dayElement.className = "calendar-day past";
        daysElement.appendChild(dayElement);
      });

      calendar.days.forEach((day) => {
        const dayElement = document.createElement("button");
        dayElement.className = "calendar-day";
        dayElement.style.background = day.today ? "#ec1" : "#fff";

        const daySpan = document.createElement("span");
        daySpan.className = "day";
        daySpan.innerHTML = day.value;
        dayElement.appendChild(daySpan);

        dayElement.addEventListener("click", () => {
          this.dispatchEvent(new CustomEvent("dayClicked", { detail: {day, calendar} }));
        });

        daysElement.appendChild(dayElement);
      });

      calendarElement.appendChild(daysElement);

      calendarWrap.appendChild(calendarElement);

    });
    calendarWrap.appendChild(arrowsWrap);
    document.getElementById('web-calendar').appendChild(arrowsWrap);

    arrowsWrap.querySelector(".calendar-arrow-prev").addEventListener("click", () => {
        calendarWrap.scrollLeft -= calendarWrap.querySelector('.calendar').offsetWidth;
      });

      arrowsWrap.querySelector(".calendar-arrow-next").addEventListener("click", () => {
        calendarWrap.scrollLeft += calendarWrap.querySelector('.calendar').offsetWidth;
      });

    document.getElementById('web-calendar').appendChild(calendarWrap);
  }
}


if (import.meta && import.meta.env.VITE_CALENDAR_DEV) {
    const webCalendar = new WebCalendar();
    webCalendar.addEventListener("dayClicked", (event) => {
        console.log(event.detail);
    });
}



