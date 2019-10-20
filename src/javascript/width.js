const widthChange = document.getElementsByClassName('fixed__width');

for (let i = 0; i < widthChange.length; i++) {
  widthChange[i].addEventListener('click', function() {
    this.classList.toggle("active");
    resizeWidth(widthWrapper);
  });
}

const widthWrapper = document.querySelectorAll('.width__wrapper');

function resizeWidth(item) {
  item.forEach(width => {
    width.classList.toggle('mobile__width');
  });
  document.querySelector('body').style.background = '#000';
  window.innerWidth = 640;
}
