const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveAway = document.querySelector(".givaway");
const deadline = document.querySelector(".deadline");
const deadlineFormat = document.querySelectorAll(".deadline-format h4");
 console.log(deadlineFormat)

const futureDate = new Date(2024, 5, 17, 17,0);
const futureYear = futureDate.getFullYear();
const futureMonth = months[futureDate.getMonth()];
const futureDay = weekdays[futureDate.getDay()];
const futuredaynumber = futureDate.getDay();

 giveAway.textContent = `givaway ends on ${futureDay},
  ${futuredaynumber} ${futureMonth} ${futureYear}pm`


  const futuretime = futureDate.getTime();



function remainingTime(){
  const today = new Date().getTime();
  const t = futuretime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const hours = 60 * 60* 1000;
  const min = 60* 1000;


  const remainingDay = Math.floor(t /oneDay);
  const remaininghours = Math.floor( (t % oneDay)/hours)
  const remainingmin = Math.floor( (t % hours)/ min)
  const remainingSec = Math.floor( (t % min) /1000)

const value = [remainingDay, remaininghours, remainingmin, remainingSec];
 function format(item){
   if (item < 10){
     return item = `0${item}`
   }
   return item
 }
deadlineFormat.forEach(function(item, index) {
  item.innerHTML = format(value [index])

});

if (t < 0){
  clearInterval(countdown)
  deadline.innerHTML = `<h4 class ="expired"> sorry, this givaway has expired !!!</h4>`;
}







}
let countdown = setInterval(remainingTime,1000)
remainingTime()
