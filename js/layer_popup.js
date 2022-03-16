const classLayer = document.querySelector('.layer'),
  idLayer = document.querySelector('#layer'),
  popupClose = document.querySelector('#layer .close');

classLayer.addEventListener('click', function (e) {
  e.preventDefault();
  idLayer.style.display = 'block';
});
popupClose.addEventListener('click', function (e) {
  e.preventDefault();
  idLayer.style.display = 'none';
});
