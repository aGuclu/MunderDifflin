console.log('SUCCESS');

var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');
var page4 = document.getElementById('page4');
var clip = document.getElementById('clip');
var post = document.getElementById('postIt');

function pageTurn() {
 var scroll = window.pageYOffset
 page1.style.top = -scroll * .4 + 'px';
 page2.style.top = -scroll * .16 + 'px';
 page3.style.top = -scroll * .1 + 'px';
 page4.style.top = -scroll * .04 + 'px';
 clip.style.top = -scroll * .9 + 'px';
 post.style.top = -scroll * .02 + 'px';
}

window.addEventListener('scroll' , pageTurn);

function toTop() {
  window.scrollTo({top: 0, behavior: 'smooth',});
}

post.addEventListener('click', toTop);
