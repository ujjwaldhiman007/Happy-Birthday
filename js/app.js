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
  
  // set current time
  let birthdaySong = new Audio ("./song.mp3");
const currentTime = new Date();
console.log(currentTime);
const fetchHours = currentTime.getHours();
const fetchMinutes = currentTime.getMinutes();


const currentTimeContainer =  document.querySelector(".current-time")
const timeMessage = document.querySelector(".time-message");
currentTimeContainer.innerHTML = `<h3>${fetchHours}<span>:</span>${fetchMinutes} PM</h3>`;
  
  const giveaway = document.querySelector(".giveaway");
  const deadline = document.querySelector(".countdown-inner");
  const items = document.querySelectorAll(".countdown-inner h3");
  // console.log(items);
  
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  let tempHours = tempDate.getHours();
  let tempMins = tempDate.getMinutes();
  let tempSeconds = tempDate.getSeconds();


  let furtureDate = new Date(2022, 11, 7, 0, 0, 0);
//   let furtureDate = new Date(2022, 11, 7, -1, 19, 0);

  
//   const furtureDate = new Date(tempYear, tempMonth,tempDay + 7, 0, 0, 0 );
  
  const year = furtureDate.getFullYear();
  const hours = furtureDate.getHours();
  const minutes = furtureDate.getMinutes();
  const tarik = furtureDate.getDate();



  let month = furtureDate.getMonth();
  month = months[month];
  
  let weekday = weekdays[furtureDate.getDay()];
  
  // console.log(weekday);
  
//   timeMessage.textContent = `Time Remain ${weekday} ${tarik} ${month} ${year} ${hours}:${minutes}am`;
  
  const futureTime = furtureDate.getTime();
  // console.log(futureTime)
  
  function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    console.log(t);
    // 1s - 1000ms
    //1min - 60s
    //1hr = 60min
    //1d = 24hrs
  
    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    // console.log(oneDay);  // this is how many miliseconds are in one Day
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate the values
    let days = t/oneDay;
    // console.log(days);  // remaining days
    days = Math.floor(days)
    let hours = Math.floor((t % oneDay) / oneHour);
    console.log(hours);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    console.log(minutes);
    let seconds = Math.floor((t % oneMinute) / 1000);
    console.log(seconds);
  
    // set value array;
    const values = [days,hours,minutes,seconds];
  
  
    function format(item){
      if(item < 10){
        return (item = `0${item}`);
      }
      else{
        return item;
      }
    }
  
    items.forEach(function(item,index){
      item.innerHTML = format(values[index]);
    });

    if(t<0){
      clearInterval(countDown);
    //   deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has out</h4>`;
    
    document.querySelector(".after-time-container").style.display = "block"
    document.querySelector(".time-message h3").innerText = "Happy birthday Riya"
    document.body.style.background = "var(--clr-primary-7)";
    document.querySelector("nav").style.visibility = "visible" ;
    document.querySelector(".clock-container").style.backgroundColor = " var(--clr-primary-3)";
    document.querySelector(".countdown").innerHTML = "Congratulations"

    }
    // birthdaySong.play();
  }
  // countDown
  let countDown = setInterval(getRemainingTime, 1000);

  
  getRemainingTime();




//  button function



const btns = document.querySelectorAll(".hero-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {

    const image = e.currentTarget.parentElement.querySelector(".image");
    const message = e.currentTarget.parentElement.querySelector(".mid");
    const imagesContainer = e.currentTarget.parentElement;
    console.log(imagesContainer);
    image.style.display = "block";
    message.style.display = "block";
    birthdaySong.play();
    imagesContainer.classList.add("images-container-shadow");
  });
});
