// >>>>>>>>PRACTICE DATE AND TIME<<<<<<<<<<<<




//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  alert(dayNames);
//  var now = new Date();
//  var theDay = now.getDay();
//  alert(theDay);
//  var nameOfToday = dayNames[theDay];
//  alert(nameOfToday);


// var d = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = d.getDay();
// var i = prompt("Enter any number from 0 to 6");
// alert(dayNames[i]);



// var rightNow = new Date();
// var today = rightNow.getDay();
// document.write(today.toString());


// var rightNow = new Date();
// var month = rightNow.getMonth();
// document.write(month.toString());


// var rightNow = new Date();
// var year = rightNow.getFullYear();
// document.write(year.toString());


// var rightNow = new Date();
// var hour = rightNow.getHours();
// document.write(hour.toString());

// var rightNow = new Date();
// var date = rightNow.getDate();
// document.write(date.toString);

// var rightNow = new Date();
// var minute = rightNow.getMinutes();
// document.write(minute.toString());

// var rightNow = new Date();
// var second = rightNow.getSeconds();
// document.write(second.toString());

// var rightNow = new Date();
// var milliSecond = rightNow.getMilliseconds();
// document.write(milliSecond.toString());

// var dateString = rightNow.toString();


// var rightNow = new Date();
// var time = rightNow.getTime();
// document.write(time.toString());

//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
// document.write(nameOfToday);


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
// document.write(nameOfToday);


// var d = new Date();
// var currentMonth = d.getMonth();
// document.write(currentMonth);

// var currentDay = d.getDay();
// document.write(currentDay);


function calculateAge() {
    // Get the user's birth date from an input field
    const birthDateString = document.getElementById('birth-date').value;
    const birthDate = new Date(birthDateString);
    
    
    var now = new Date();
    
    var ageInMilliseconds = now - birthDate;
    
    var ageInYears = Math.floor(ageInMilliseconds / 31557600000);
    var ageInMonths = Math.floor((now.getFullYear() - birthDate.getFullYear()) * 12 + (now.getMonth() - birthDate.getMonth()));
    var ageInDays = Math.floor(ageInMilliseconds / 86400000);
    var ageInHours = now.getHours() - birthDate.getHours();
    var ageInMinutes = now.getMinutes() - birthDate.getMinutes();
    var ageInSeconds = now.getSeconds() - birthDate.getSeconds();
    var ageInMillisecondsOutput = ageInMilliseconds;
    
    document.write('Age in years:', ageInYears);
    document.write('Age in months:',ageInMonths);
    document.write('Age in days:', ageInDays);
    document.write('Age in hours:', ageInHours);
    document.write('Age in minutes:', ageInMinutes);
    document.write('Age in seconds:', ageInSeconds);
    document.write('Age in milliseconds:', ageInMillisecondsOutput);
  }
  















