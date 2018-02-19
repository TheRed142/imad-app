console.log('Loaded!');
 
//changing the content

var element = document.getElementById('main-text');

element.innerHTML = 'THE RED';

//movig the image
var img = document.getElementById('madi');
marginleft = 0;
function moveright() {
    marginleft = marginleft+1;
    img.style.marginleft = marginleft + 'px';
}
  img.onclick = function() {
  var inerval = setInterval(moveright,50);
};
