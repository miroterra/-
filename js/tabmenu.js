const tabList = document.querySelectorAll('.tab_menu ul > li');

for (let i = 0; i < tabList.length; i++) {
  tabList[i].addEventListener('focusin', function (e) {
    e.preventDefault();
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}
