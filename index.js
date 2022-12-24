window.addEventListener('DOMContentLoaded', function() {

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((t / 1000) % 60);
        const minutes = Math.floor((t / 60000) % 60);
        const hours = Math.floor((t / (3600000)) % 24);
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
    };
      
      function initializeClock(id, endtime) {
        const clock = document.getElementById(id);
        const daysSpan = document.querySelector('.days-num');
        const hoursSpan = document.querySelector('.hours-num');
        const minutesSpan = document.querySelector('.minutes-num');
        const secondsSpan = document.querySelector('.seconds-num');
        const daysText = document.querySelector('.days-text');
        const hoursText = document.querySelector('.hours-text');
        const minutesText = document.querySelector('.minutes-text');
        const secondsText = document.querySelector('.seconds-text');
    
        function updateClock() {
            const t = getTimeRemaining(endtime);
      
            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
            function wordsEnd(number, words) {  
                 return words[(number % 100 > 04 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
            };
            secondsText.textContent = wordsEnd(secondsSpan.textContent, ['секунда', 'секунды', 'секунд']);
            minutesText.textContent = wordsEnd(minutesSpan.textContent, ['минута', 'минуты', 'минут']);
            hoursText.textContent = wordsEnd(hoursSpan.textContent, ['час', 'часа', 'часов']);
            daysText.textContent = wordsEnd(daysSpan.textContent, ['день', 'дня', 'дней']);
      
            const timeinterval = setInterval(updateClock, 1000);
    
            if (t.total <= 0) {
                // clearInterval(timeinterval);
                daysSpan.textContent = '00';
                hoursSpan.textContent = '00';
                minutesSpan.textContent = '00';
                secondsSpan.textContent = '00';
            };
        };
        updateClock();
        };
      
        const deadline="2023-1-10"; 
        initializeClock('countdown', deadline);

});
