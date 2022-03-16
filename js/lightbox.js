// 지금 작업물에는 하나만 있지만 여러 작업물이 들어있을 때를 기준으로 스크립트 작성

const lightImg = document.querySelectorAll('.lightbox img');
const lightBox = document.querySelector('#lightbox-overlay');
const lightBoxImg = lightBox.querySelector('img');

for (let i = 0; i < lightImg.length; i++) {
  lightImg[i].addEventListener('click', function () {
    let imgNewSrc = this.getAttribute('data-lightbox');
    lightBoxImg.setAttribute('src', imgNewSrc);
    lightBox.classList.add('visible');
  });
}
lightBox.addEventListener('click', function () {
  lightBox.classList.remove('visible');
});
