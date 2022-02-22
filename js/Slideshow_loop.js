// 변수 지정
const slides = document.querySelector('.ban .ban_slide'),
  slide = document.querySelectorAll('.ban .ban_slide li'),
  slideCount = slide.length, //슬라이드 갯수 파악
  prevBtn = document.querySelector('.prev'),
  nextBtn = document.querySelector('.next');
let slideWidth = 300,
  slideMargin = 30,
  currentIdx = 0; //슬라이드 파악
makeClone(); //복사본 만들기
// 복사본을 만들어서 앞or 뒤에 추가
function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    // 요소를 복사하는 .cloneNode()-하나만, cloneNode(true)-자식요소까지
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    // .appendChild() 내용 뒤에 요소를 추가하는 함수
    slides.appendChild(cloneSlide);
  }
  for (var i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    // .prepend() 내용 앞에 요소를 추가하는 함수
    slides.prepend(cloneSlide);
  }
  updateWidth(); // 슬라이드의 총 길이값 선언
  setInitialPos(); //슬라이드의 초기 위치 설정 선언
  setTimeout(function () {
    //translate로 이동 하는게 보이기때문에
    slides.classList.add('animated');
  }, 100);
}

function updateWidth() {
  // 복사한 모든 항목 ul의 총 길이값을 지정하는 함수
  let currentSlides = document.querySelectorAll('.ban .ban_slide li');
  let newSlideCount = currentSlides.length;
  let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
  slides.style.width = newWidth;
}
function setInitialPos() {
  //슬라이드의 초기 위치 설정
  let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
}
nextBtn.addEventListener('click', function (e) {
  e.preventDefault();
  moveslide(currentIdx + 1);
});
prevBtn.addEventListener('click', function (e) {
  e.preventDefault();
  moveslide(currentIdx - 1);
});
function moveslide(num) {
  slides.style.left = -num * (slideWidth + slideMargin) + 'px';
  currentIdx = num;
  if (currentIdx == slideCount || currentIdx == -slideCount) {
    setTimeout(function () {
      slides.classList.remove('animated');
      slides.style.left = '0px';
      currentIdx = 0;
    }, 500);
    setTimeout(function () {
      slides.classList.add('animated');
    }, 600);
  }
}

//자동슬라이드 만들기
let timer = undefined;
function autoSlide() {
  if (timer == undefined) {
    timer = setInterval(function () {
      moveslide(currentIdx + 1);
    }, 3000);
  }
}
autoSlide();
function stopSlide() {
  clearInterval(timer);
  timer = undefined;
}
document.querySelector('#cont_ban').addEventListener('mouseenter', function () {
  stopSlide();
});
document.querySelector('#cont_ban').addEventListener('mouseleave', function () {
  autoSlide();
});
