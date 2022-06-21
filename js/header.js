// Digital Clock

try {
    setInterval(()=>{

        // Digital CLock
    
        let hours = document.getElementById('hour');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');
        let ampm = document.getElementById('ampm');
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
    
        // add zero before single digit number
    
            h=(h<10)? "0" + h :h;
            m=(m<10)? "0" + m :m;
            s=(s<10)? "0" + s :s;
            
            let am = h >= 12 ? "PM":"AM";
    
        // Convert 24 hours clock to 12 hours
        if(h>12) {
            h=h-12;
        }
    
    
        
        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
        ampm.innerHTML = am;
        })
} catch (error) {
    console.log(error)
}



    // Logo

    (function() {
        // We must use JS as we need to select previous
        // elements which can't be done with CSS.
        $('.skew-title').children('span').hover((function() {
          var $el, n;
          $el = $(this);
          n = $el.index() + 1;
          $el.addClass('flat');
          if (n % 2 === 0) {
            return $el.prev().addClass('flat');
          } else {
            if (!$el.hasClass('last')) {
              return $el.next().addClass('flat');
            }
          }
        }), function() {
          return $('.flat').removeClass('flat');
        });
      
      }).call(this);

// Bulb
const finalbulb = document.querySelector('.finalbulb');
const bulbCheckbox = document.querySelector('.bulbcheckbox');
const lightDark = document.querySelector('.lightDark');
const timeColor = document.getElementById('time').children;
const horizontalLine = document.querySelectorAll('.horizontal-line');
const weatherPara = document.querySelector('.Weatherpara');
const refreshWeather = document.querySelector('.refreshweather');
const scrollLine = document.querySelector('.scroll-line');
const Menus = document.querySelectorAll('.item');



bulbCheckbox.onclick = function(){
    audio.play();
    var lighton = lightDark.classList.toggle('onn');
    lightDarkmode(lighton);
    }

finalbulb.onclick = function() {
    audio.play();
    var lighton = lightDark.classList.toggle('on');
    lightDarkmode(lighton);
}



function lightDarkmode (lighton) {
    if(lighton === true) {
        document.body.style.background = "var(--background-blue)";
        scrollLine.style.background = "var(--backgroud-black)";

        // Time Color

        for(i=0; i<timeColor.length; i++) {
            timeColor[i].style.color = "var(--background-black)";
        }

        // Horizontal-line

     for(i=0; i<horizontalLine.length; i++){
          horizontalLine[i].background = "var(--background-blue)";
    }

    for(i=0; i<Menus.length; i++){
        Menus[i].style.boxShadow = "0 0 5px #144c6e";
    }

  
    }else {
        document.body.style.background = "var(--background-black)";
        scrollLine.style.background = "var(--background-blue)";

        // Time Color

        for(i=0; i<timeColor.length; i++) {
            timeColor[i].style.color = "var(--background-blue)";
        }

        // Horizontal-line

        for(i=0; i<horizontalLine.length; i++){
            horizontalLine[i].background = "var(--background-black)";
        }

        // Menu Shadow

        for(i=0; i<Menus.length; i++){
            Menus[i].style.boxShadow = "0 0 5px #fff";
        }
       
    }
}

// Play Button
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const playBtn = document.querySelector('.circle__btn');
const wave1 = document.querySelector('.circle__back-1');
const wave2 = document.querySelector('.circle__back-2');

playBtn.addEventListener('click', function(e) {
    e.preventDefault();
    play.classList.toggle('visibility');
    pause.classList.toggle('visibility');
    playBtn.classList.toggle('shadow');
    wave1.classList.toggle('paused');
    wave2.classList.toggle('paused');
  });


// Weather
$( document ).ready(function() {
    checkingweather();
});

function checkingweather() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }else {
    alert('your browser not support')
    }
    
    
    
    function onSuccess(position){
        
        let {latitude, longitude} = position.coords;
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=2252139de2424b4ab5312ff4c27ee385`)
        .then(response => response.json()).then(response =>{
            let allDetails = response.results[0].components;
            checkWeather(allDetails.city)
            let {county, postcode, country} = allDetails;
        }).catch(()=>{
            checkWeather.innerHTML = `Please Allow`
        });
    }
    
    function onError(error) {
        console.log(error);
    }
    
    function checkWeather(location) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d3fce2b1754d7f87ca9096fb20f9011e`)
        .then(response => response.json()).then(response => {
            weatherPara.innerHTML = `${location} ${response.main.temp}<sup>o</sup>C`
        })
    }
}

refreshWeather.addEventListener('click', function(){
    checkingweather()
})

// Main menu Carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    pagination:false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:8
        }
    }
})

// Scroll Line
$(document).ready(function(){
    $(window).scroll(function(){
      var windowTop = $(window).scrollTop(),
      documentHeight = $(document).height(),
      windowHeight = $(window).height();
      var scroll = (windowTop / (documentHeight - windowHeight))*100;
      $('.scroll-line').css("width", (scroll + '%'));
    });
  });


//   Video on Click

let videobtn = document.querySelector(".circle__btn");
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let video = document.querySelector('video');
const playButton = document.querySelector('.play-button');
videobtn.onclick = function(){
    videobtn.classList.add('active');
    clip.classList.add('active');
    video.play();
    video.currentTime = 0;
    console.log(videobtn.classList[1])

    if(videobtn.classList[1] == "active") {
        document.body.style.overflow = "hidden"
    }else {
        document.body.style.overflow = "visible"
    }
}




close.onclick = function(){
    videobtn.classList.remove('active');
    clip.classList.remove('active');
    video.pause();
    document.body.style.overflow = "visible"
}



// 3D Slider
let activeIndex = 0;
let limit = 0;
let disabled = false;
let $stage;
let $controls;
let canvas = false;

const SPIN_FORWARD_CLASS = 'js-spin-fwd';
const SPIN_BACKWARD_CLASS = 'js-spin-bwd';
const DISABLE_TRANSITIONS_CLASS = 'js-transitions-disabled';
const SPIN_DUR = 1000;

const appendControls = () => {
  for (let i = 0; i < limit; i++) {if (window.CP.shouldStopExecution(0)) break;
    $('.carousel__control').append(`<a href="#" data-index="${i}"></a>`);
  }window.CP.exitedLoop(0);
  let height = $('.carousel__control').children().last().outerHeight();

  $('.carousel__control').css('height', 30 + limit * height);
  $controls = $('.carousel__control').children();
  $controls.eq(activeIndex).addClass('active');
};

const setIndexes = () => {
  $('.spinner').children().each((i, el) => {
    $(el).attr('data-index', i);
    limit++;
  });
};

const duplicateSpinner = () => {
  const $el = $('.spinner').parent();
  const html = $('.spinner').parent().html();
  $el.append(html);
  $('.spinner').last().addClass('spinner--right');
  $('.spinner--right').removeClass('spinner--left');
};

const paintFaces = () => {
  $('.spinner__face').each((i, el) => {
    const $el = $(el);
    let color = $(el).attr('data-bg');
    $el.children().css('backgroundImage', `url(${getBase64PixelByColor(color)})`);
  });
};

const getBase64PixelByColor = hex => {
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.height = 1;
    canvas.width = 1;
  }
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, 1, 1);
    return canvas.toDataURL();
  }
  return false;
};

const prepareDom = () => {
  setIndexes();
  paintFaces();
  duplicateSpinner();
  appendControls();
};

const spin = (inc = 1) => {
  if (disabled) return;
  if (!inc) return;
  activeIndex += inc;
  disabled = true;

  if (activeIndex >= limit) {
    activeIndex = 0;
  }

  if (activeIndex < 0) {
    activeIndex = limit - 1;
  }

  const $activeEls = $('.spinner__face.js-active');
  const $nextEls = $(`.spinner__face[data-index=${activeIndex}]`);
  $nextEls.addClass('js-next');

  if (inc > 0) {
    $stage.addClass(SPIN_FORWARD_CLASS);
  } else {
    $stage.addClass(SPIN_BACKWARD_CLASS);
  }

  $controls.removeClass('active');
  $controls.eq(activeIndex).addClass('active');

  setTimeout(() => {
    spinCallback(inc);
  }, SPIN_DUR, inc);
};

const spinCallback = inc => {

  $('.js-active').removeClass('js-active');
  $('.js-next').removeClass('js-next').addClass('js-active');
  $stage.
  addClass(DISABLE_TRANSITIONS_CLASS).
  removeClass(SPIN_FORWARD_CLASS).
  removeClass(SPIN_BACKWARD_CLASS);

  $('.js-active').each((i, el) => {
    const $el = $(el);
    $el.prependTo($el.parent());
  });
  setTimeout(() => {
    $stage.removeClass(DISABLE_TRANSITIONS_CLASS);
    disabled = false;
  }, 100);

};

const attachListeners = () => {

  document.onkeyup = e => {
    switch (e.keyCode) {
      case 38:
        spin(-1);
        break;
      case 40:
        spin(1);
        break;}

  };

  $controls.on('click', e => {
    e.preventDefault();
    if (disabled) return;
    const $el = $(e.target);
    const toIndex = parseInt($el.attr('data-index'), 10);
    spin(toIndex - activeIndex);

  });
};

const assignEls = () => {
  $stage = $('.carousel__stage');
};

const init = () => {
  assignEls();
  prepareDom();
  attachListeners();
};


$(() => {
  init();
});