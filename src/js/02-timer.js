import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const flatpickr = require('flatpickr');
const inputDate = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');
const currentDate = new Date();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) { setInterval(() => {   
  
    if (selectedDates[0] > currentDate) {
      startButton.removeAttribute('disabled');
      
      const endTime = selectedDates[0].getTime();
      const startTime = currentDate.getTime();
      const objDate = convertMs(endTime - startTime);
console.log(objDate);
      /*daysValue.textContent = addLeadingZero(objDate.days);
      hoursValue.textContent = addLeadingZero(objDate.hours);
      minutesValue.textContent = addLeadingZero(objDate.minutes);
      secondsValue.textContent = addLeadingZero(objDate.seconds);*/

        startButton.addEventListener('click', timerUp);
        
        function timerUp() {
        
          daysValue.textContent = addLeadingZero(objDate.days);
          hoursValue.textContent = addLeadingZero(objDate.hours);
          minutesValue.textContent = addLeadingZero(objDate.minutes);
             secondsValue.textContent = addLeadingZero(objDate.seconds);
             console.log(objDate)
        
      }
    } else {
      alert('Please choose a date in the future');
      startButton.disabled = 'true';
    }}, 1000);
  },
};

flatpickr(inputDate, options);

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
