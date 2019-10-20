let slides = document.querySelectorAll('.item');
console.log(slides);
let activeItem = 0;

let block = false;
function changeActiveItem(n) {
  activeItem = (n + slides.length) % slides.length;
}

function hideItem(direction) {
  block = true;
  slides[activeItem].classList.add(direction);
  slides[activeItem].addEventListener('animationend', function() {
    this.classList.remove('slider--active', direction);
  })
}

function showItem(direction) {
  slides[activeItem].classList.add('next', direction);
  slides[activeItem].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('slider--active');
    block = false;
  })
}

function previousItem(n){
  hideItem('to-right');
  changeActiveItem(n - 1);
  showItem('from-left');
}

function nextItem(n){
  hideItem('to-left');
  changeActiveItem(n + 1);
  showItem('from-right');
}

document.querySelector('.slider__control.left').addEventListener('click', function() {
  console.log(activeItem);
  if (!block) {
    previousItem(activeItem);
  }
});

document.querySelector('.slider__control.right').addEventListener('click', function() {
  if (!block) {
    nextItem(activeItem);
  }
});


function collapsible() {
  const collapse = document.getElementsByClassName("slider-collapse");
  Array.from(collapse).forEach(elem => {
    elem.classList.toggle("active");
    let content = elem.nextElementSibling;
    if(content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}


const Swiper = (element) => {
  let swipeElement = element;
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;
  let minDistX = 100;
  let maxDistY = 100;

  let startTime = 0;
  let spentTime = 0;
  let minTime = 200;

  swipeElement.addEventListener('touchstart', function(e) {
    if(e.target.classList.contains('slider__control') || e.target.classList.contains('slider__arrow')) {
      if(e.target.classList.contains('right')){
        if(!block){
          nextItem(activeItem);
        }
      } else if(e.target.classList.contains('left')) {
        if(!block) {
          previousItem(activeItem);
        }
      }
    }
    if(e.target.classList.contains('slider-collapse')) {
      collapsible();
    }

    let touchPoint = e.changedTouches[0];
    startX = touchPoint.pageX;
    startY = touchPoint.pageY;
    startTime = new Date().getDate();
    e.preventDefault();
  });

  swipeElement.addEventListener('touchend', function(e) {
    let touchPoint = e.changedTouches[0];
    distX = touchPoint.pageX - startX;
    distY = touchPoint.pageY - startY;
    spentTime = new Date().getDate() - startTime;

    if(spentTime <= minTime) {
      if(Math.abs(distX) >= minDistX && Math.abs(distY) <= maxDistY) {
        if(distX > 0) {
          if(!block) {
            previousItem(activeItem);
          }
        } else if(distX < 0) {
          if(!block) {
            nextItem(activeItem);
          }
        }
      }
    }
  });
};

let element = document.querySelector('.slider');
Swiper(element);