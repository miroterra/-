const gallerySlides = document.querySelector('.gallery_slide'),
  slideItem = document.querySelectorAll('.mySlide'),
  firstEl = slideItem[0],
  stopBtn = document.querySelector('#btn_stop'),
  startBtn = document.querySelector('#btn_start');

function slideOn() {
  firstEl.classList.add('showing');
  let timeSlide = setInterval(slideStart, 4000);
  function slideStart(isThat) {
    if (isThat) {
      var clickBtn = 'previous';
    } else {
      var clickBtn = 'next';
    }
    const currentItem = document.querySelector('.showing');
    currentItem.classList.remove('showing');
    if (clickBtn === 'next') {
      if (!currentItem.nextElementSibling) {
        slideItem[0].classList.add('showing');
      } else {
        currentItem.nextElementSibling.classList.add('showing');
      }
    } else if (clickBtn === 'previous') {
      if (!currentItem.previousElementSibling) {
        slideItem[slideItem.length - 1].classList.add('showing');
      } else {
        currentItem.previousElementSibling.classList.add('showing');
      }
    }
  }
  startBtn.addEventListener('click', function (e) {
    e.preventDefault();
    timeSlide = setInterval(slideStart, 4000);
  });
  stopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    clearInterval(timeSlide);
    clearInterval(slideStart);
  });
  const nextBtn = document.querySelector('#btn_next'),
    prevBtn = document.querySelector('#btn_prev');
  nextBtn.addEventListener('click', function (e) {
    e.preventDefault();
    clearInterval(timeSlide);
    slideStart();
  });
  prevBtn.addEventListener('click', function (e) {
    e.preventDefault();
    clearInterval(timeSlide);
    slideStart('1');
  });
}
slideOn();
