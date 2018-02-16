console.log('Loaded!');
 
//changing the content

var element = document.getElementById('main-text');

element.innerHTML = 'new value';

//movig the image
var img = document.getElementById('madi');
img.onclick=function(){
  madi.style.marginleft = '100px';
};
