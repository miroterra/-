// 변수 지정
const slides = document.querySelector('.ban .ban_slide'),
  slide = document.querySelectorAll('.ban .ban_slide li'),
  currentIdx = 0, //슬라이드 파악
  slideCount = slide.length, //슬라이드 갯수 파악
  prevBtn = document.querySelector('.prev'),
  nextBtn = document.querySelector('.next');
let slideWidth = 330,
  slideMargin = 32;

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
  updateWidth(); // 복사한 모든 항목 ul의 총 길이값을 지정하는 함수
}

function updateWidth() {
  let currentSlides = document.querySelectorAll('.ban .ban_slide li');
  let newSlideCount = currentSlides.length;
  let newWidth = slideWidth * newSlideCount + 'px';
  slides.style.width = newWidth;
}
