export default function timeStamp(state) {
    console.log(state);
    
    if (!state) {
      return '';
    }
    let textTime = '';
    const fullDate = state;
    let date = new Date(fullDate);
    if (Number.isNaN(date.getMonth())) {
      const arr = fullDate?.split(/[- :]/);
      date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
    }
    const dt2 = new Date();
    let diff = (dt2.getTime() - date.getTime()) / 1000;
    diff /= 60;
    // minutes
    const minutes = Math.abs(Math.round(diff));
    const hours = Math.floor(minutes / 60);
    if (minutes == 1) {
      textTime = minutes + ' minute ago';
    }
    if (minutes > 1 && minutes < 60) {
      textTime = minutes + ' minutes ago';
    }
    // hours
    if (hours == 1) {
      textTime = hours + ' hour ago';
    }
  
    // weeks
  
    let ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
    let weekDiff = dt2.getTime() - date.getTime();
    let absWeeks = Math.abs(weekDiff);
    let weeks = Math.floor(absWeeks / ONE_WEEK);
    if (weeks == 1) {
      textTime = weeks + ' week ago';
    } else if (weeks > 1 && weeks <= 3) {
      textTime = weeks + ' weeks ago';
    } else if (weeks == 4) {
      textTime = ' 1 month ago';
    }
    // days
    let diffDate = date.getDate() != dt2.getDate();
    if (diffDate) {
      let days = dt2.getDate() - date.getDate();
      if (days == 1) {
        textTime = days + ' day ago';
      } else if (days > 1 && days <= 6) {
        textTime = days + ' days ago';
      } else if (days == 7) {
        textTime = '1 week ago';
      }
    }
  
    if (hours > 1 && hours <= 23) {
      textTime = hours + ' hours ago';
    }
  
    // months
    let diffMonth = dt2.getMonth() != date.getMonth();
    if (diffMonth) {
      let months = dt2.getMonth() - date.getMonth();
      if (months == 1) {
        textTime = months + ' month ago';
      } else if (months > 1 && months <= 11) {
        textTime = months + ' months ago';
      } else if (months == 12) {
        textTime = '1 year ago';
      }
    }
  
    //year
    let diffYear = dt2.getFullYear() != date.getFullYear();
    if (diffYear) {
      let years = dt2.getFullYear() - date.getFullYear();
      if (years == 1) {
        textTime = years + ' year ago';
      } else if (years > 1) {
        textTime = years + ' years ago';
      }
    }
  
    return textTime;
  }