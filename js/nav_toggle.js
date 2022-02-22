const navBtn = document.querySelector('.tit .btn');
const navCon = document.querySelector('#cont_nav .nav');

navBtn.addEventListener('click', function (e) {
  e.preventDefault();
  navBtn.classList.toggle('on');
  navCon.classList.toggle('on');
});
