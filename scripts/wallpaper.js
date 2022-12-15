var responsiveSlider = function () {

  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  window.addEventListener('resize', function () {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if (count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var clickNextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if (count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  var timerFunc = function () {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    if(h<10){h = `0` + h};
    if(m<10){m = `0` + m};
    if(s<10){s = `0` + s};
    document.getElementById("clock").innerHTML = h + `:` + m + ':' + s;
    if (d.getSeconds() % 12 == 0) {
      if (count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      } else if (count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
      getTimeMessage();

    }
  };


  next.addEventListener("click", function () {
    clickNextSlide();
  });

  prev.addEventListener("click", function () {
    prevSlide();
  });

  document.getElementById("setTilt").addEventListener("click",function(){
        /* -webkit-transform: rotate(-3.5deg);
    -moz-transform: rotate(-3.5deg); */
    const val = document.getElementById("newTilt").value
    console.log(val)
    const bodies = document.querySelectorAll(".note");
    for(body of bodies){
      body.style= `transform: rotate(${val} deg); -webkit-transform: rotate(${val}deg); -moz-transform: rotate(${val}deg);`;
    }
  })

  setInterval(function () {
    timerFunc()
  }, 1000);

};

var getTimeMessage = function () {
  const d = new Date();
  if (d.getHours() == 18 && d.getMinutes == 47) {
    document.getElementById("time-text").innerHTML = `HAAAAAAAAAAAAAAAAAAAAAAAAALLLLLLLLLLLLLLLLLLLLL DIIIIIIIIIIINNNNNNNNNNEEEEEEEEEERRRRRRRRR`;
  } else if (d.getHours() == 17 && d.getMinutes == 38) {
    document.getElementById("time-text").innerHTML = `stale meme dude`;
  } else {
    switch (d.getHours()) { //dude you gotta think of more funny things
      case 1:
      case 2:
        document.getElementById("time-text").innerHTML = `we're working at night, I see`;
        break;
      case 3:
      case 4:
        document.getElementById("time-text").innerHTML = `Hey Idiot, it's time to go to bed`;
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        document.getElementById("time-text").innerHTML = `Good Morning sunshine!`;
        break;
      case 10:
      case 11:
      case 12:
      case 13:
        document.getElementById("time-text").innerHTML = `Pay attention in class!`;
        break;
      case 14:
      case 15:
      case 16:
      case 17:
        document.getElementById("time-text").innerHTML = `You should be using this time more wisely I would guess`;
        break;
      case 18:
      case 19:
        document.getElementById("time-text").innerHTML = `Dinner time!`;
        break;
      case 20:
        document.getElementById("time-text").innerHTML = `The current hours is 8pm (I wonder if you can guess which one is a debugging message)`
        break;
      case 21:
      case 22:
      case 23:
      case 0:
      case 24:
        document.getElementById("time-text").innerHTML = `it is the evening`;
        break;
      default:
        document.getElementById("time-text").innerHTML = `We couldn't get the time that's disappointing`; break;
    }
  }

}

window.onload = function () {
  responsiveSlider();
  const d = new Date();
  document.getElementById("clock").innerHTML = d.getHours() + `:` + d.getMinutes() + ':' + d.getSeconds();
  getTimeMessage();
  document.getElementById("newTilt").value = 0;
  console.log(window.innerHeight)
  console.log(window.innerWidth)
}