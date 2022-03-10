const gallerySlides = document.querySelector('.gallery_slide');
const slideItem = document.querySelectorAll('.mySlide');
const firstEl = slideItem[0];
const stopBtn = document.querySelector('#btn_stop');

function slideOn() {
  firstEl.classList.add('showing');
  const timeSlide = setInterval(slideStart, 4000);
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
  const nextBtn = document.querySelector('#btn_next');
  const prevBtn = document.querySelector('#btn_prev');
  nextBtn.addEventListener('click', function (e) {
    e.preventDefault();
    clearInterval(timeSlide);
    slideStart();
  });
  prevBtn.addEventListener('click', function (e) {
    e.preventDefault();
    clearInterval(timeSlide);
    slideStart('');
  });
  stopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    clearInterval(timeSlide);
  });
}
slideOn();
