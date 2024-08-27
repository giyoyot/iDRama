$(document).ready(function(){
  $('.carousel').carousel();
});

var swiper = new Swiper(".movie-slider", {
  loop:true,
  spaceBetween: 5,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  // centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    1023: {
      slidesPerView: 4,
    },
  },
});

function toogleVideo(){
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('video');
  video.pause();
  trailer.classList.toggle('active');
}

function changeBg(bg, title){
  const banner = document.querySelector('.banner');
  const contents = document.querySelectorAll('.content');
  banner.style.background = `url("images/movies/${bg}") no-repeat`;
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';

  contents.forEach(content => {
    content.classList.remove('active');
    if(content.classList.contains(title)){
      content.classList.add('active');
    }
  });
}

function openTrailer(id) {
  const trailer = document.getElementById(id);
  const video = trailer.querySelector('video');
  
  trailer.classList.add('active'); 
  video.currentTime = 0;
  video.play(); 
}

document.querySelectorAll('.play').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const trailerId = this.getAttribute('data-trailer');
    openTrailer(trailerId); 
  });
});

function closeTrailer(id) {
  const trailer = document.getElementById(id);
  const video = trailer.querySelector('video');
  
  video.pause(); 
  trailer.classList.remove('active'); 
}

