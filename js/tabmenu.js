const tabList = document.querySelectorAll('.tab_menu ul li');
const tabBtn = document.querySelector('.tab_menu .tab_btn');
for (let i = 0; i < tabList.length; i++) {
  tabList[i].tabBtn.addEventListener('click', function (e) {
    e.preventDefault();
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('active');
    }
    this.parentNode.classList.add('active');
  });
}
