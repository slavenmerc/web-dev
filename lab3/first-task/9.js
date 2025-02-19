//1
let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 )
//2
let date = new Date(2012, 0, 3);  
alert( getWeekDay(date) );
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  
  let date1 = new Date(2014, 0, 3); 
  alert( getWeekDay(date1) );
//3
let date2 = new Date(2012, 0, 3);  
alert( getLocalDay(date2) );
function getLocalDay(date) {

    let day = date2.getDay();
  
    if (day == 0) { 
      day = 7;
    }
  
    return day;
  }
//4
function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
  
  let date3 = new Date(2015, 0, 2);
  
  alert( getDateAgo(date3, 1) ); 
  alert( getDateAgo(date3, 2) ); 
  alert( getDateAgo(date3, 365) );
//5
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  alert( getLastDayOfMonth(2012, 0) ); 
  alert( getLastDayOfMonth(2012, 1) ); 
  alert( getLastDayOfMonth(2013, 1) );
//6
getSecondsToday() == 36000
function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }
  
  alert( getSecondsToday() );
//7
getSecondsToTomorrow() == 3600
function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;
  }
//8
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // formatting
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'right now';
    } else if (diffMin < 1) {
      return `${diffSec} sec. ago`
    } else if (diffHour < 1) {
      return `${diffMin} min. ago`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
  }