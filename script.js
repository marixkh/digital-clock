  function updateTime() {
      const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const date = new Date();

      const addZero = (num) => (num < 10 ? '0' + num : num);

      let h = date.getHours();
      let m = addZero(date.getMinutes());
      let s = addZero(date.getSeconds());
      let day = weekday[date.getDay()];

      let period = (h >= 12) ? 'PM' : 'AM';
      h = (h % 12) || 12; // برای ساعت ۱۲ ساعته

      // نمایش در صفحه
      document.getElementById('clock').innerText = `${day} ${h}:${m}:${s} ${period}`;
    }

    setInterval(updateTime, 1000);
    updateTime(); // اولین بار بدون تأخیر اجرا بشه
