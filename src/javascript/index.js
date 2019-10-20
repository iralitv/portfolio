import '../sass/styles.scss';
import '../javascript/slider.js'

const collapse = document.getElementsByClassName("education__collapse");

for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function() {
     this.classList.toggle("active");
     let content = this.nextElementSibling;
     if(content.style.maxHeight){
       content.style.maxHeight = null;
     } else {
       content.style.maxHeight = content.scrollHeight + 'px';
     }
  });
}
