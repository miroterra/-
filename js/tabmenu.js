const tabList = document.querySelectorAll('.tab_menu ul > li');

for (let i = 0; i < tabList.length; i++) {
  tabList[i].addEventListener('click', function (e) {
    e.preventDefault();
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

tabList.addEventListener('focusin', function (e) {
  if (!tabList.classList.contains('active')) {
    e.target.classList.add('active');
  }
});
