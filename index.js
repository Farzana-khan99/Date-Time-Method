// 1. Write a program that displays current date and time in
// your browser.

let date = new Date();
console.log(date, "pakistan standard time ");

// 2. Write a program that alerts the current month in words.
// For example December.

let month = [
  "january",
  "Feburary",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "August",
  "September",
  "october",
  "November",
  "December",
];
let curMonth = new Date();
let showMonth = month[curMonth.getMonth()];
console.log(`Current December: ${showMonth}`);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

let dayFind = new Date();
let daysName = [
  "Sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "Friday",
  "Saturday",
];
// console.log(dayFind)
let CurDay = daysName[dayFind.getDay()];
console.log(`Today is : ${CurDay}`);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

let daysArray = [
  "Sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "Friday",
  "Saturday",
];
if (daysArray[0] === "Sunday" && daysArray[6] === "Saturday") {
  console.log("Its Fun Day");
} else {
  console.log("not fun day");
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

let dated = new Date();
let firstDay = new Date(dated.getFullYear(), dated.getMonth());
let LastDay = new Date(dated.getFullYear(), dated.getMonth() + 1, 0);
console.log(` First Fifteen days of the month: ${firstDay}`);
console.log(` last Fifteen days of the month: ${LastDay}`);

let findDays = new Date()
let monthDays = findDays.getDay()+1

if(monthDays <= 15 ){
    console.log(monthDays, "First Fifteen days of the month ")
}
else if(monthDays > 15){

    console.log(monthDays, "last Fifteen days of the month ")
}

else{
    console.log("complete days of the month")
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.



// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

let d = new Date()

let hours = d.getHours()
let minutes = d.getMinutes()
let result = hours >= 12 ? "PM" : "AM"
console.log(`Its ${result}`)

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.




// Dec 3 4:52 pm
let nowDate = new Date()
let monthsName = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "July" , "Aug" , "Sept" , "Oct" , "Nov" , "Dec"]
let ShowMonth = monthsName[nowDate.getMonth()]
let day = nowDate.getDate()
let h = nowDate.getHours()
let m = nowDate.getMinutes()

let output = h >=12 ? "PM" :"Am"
h = h -12;

console.log(`${ShowMonth} ${day} ${h}:${m} ${output}`)

// three variable 1,6 ,  7 12 ,  13, 15 tk hay

let numvar = [1, 2,3, 4, 5 , 6 ,7, 8 , 9 ,10 ,11 , 12 , 13 ,14 ,15]

let personOne = numvar.slice(0, 6);
console.log(personOne)
let personTwo =numvar.slice(6,  12)
console.log(personTwo)
let personThree = numvar.slice(12)
console.log(personThree)
