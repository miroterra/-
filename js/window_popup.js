const windowPopup = document.querySelector('.window');

windowPopup.addEventListener('click', function (e) {
  e.preventDefault();
  window.open('sample_popup.html', 'popup01', 'width=800', 'height=590', 'left=50', 'top=50', 'scrollbar=0', 'toolbar=0', 'menubar=0');
});
