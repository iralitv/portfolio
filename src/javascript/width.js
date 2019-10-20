const widthChange = document.getElementsByClassName('fixed__width');

for (let i = 0; i < widthChange.length; i++) {
  widthChange[i].addEventListener('click', function() {
    this.classList.toggle('active');
    resizeWidth(widthWrapper);
    if(this.classList.contains('active')){
      viewportMeta.setAttribute('content', viewports.mobile);
    } else {
      viewportMeta.setAttribute('content', viewports.default);
    }
  });
}

const viewportMeta = document.getElementById('viewport__meta');
const viewports = {
  default: viewportMeta.getAttribute('content'),
  mobile: 'width=640'
};

const widthWrapper = document.querySelectorAll('.width__wrapper');

function resizeWidth(item) {
  item.forEach(width => {
    width.classList.toggle('mobile__width');
  });
  document.querySelector('body').style.background = '#000';
}

