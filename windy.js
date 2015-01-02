var its_windy = function() {
  var windy_url = 'http://dholst.github.io/windy/windy.png';
  var div = document.createElement('div');
  var numType = 'px';
  var heightRandom = Math.random() * .75;
  var windowHeight = 768;
  var windowWidth = 1024;
  var height = 0;
  var width = 0;
  var de = document.documentElement;

  if(typeof(window.innerHeight) == 'number') {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
  } else if(de && de.clientHeight) {
    windowHeight = de.clientHeight;
    windowWidth = de.clientWidth;
  } else {
    numType = '%';
    height = Math.round(height * 100) + '%';
  }

  div.style.position = 'fixed';
  div.style.zIndex = 10;
  div.style.outline = 0;
  div.style.left = Math.round(Math.random() * 80) + '%';

  if(numType == 'px') {
    div.style.top = Math.round(windowHeight * heightRandom ) + numType;
  } else {
    div.style.top = height;
  }

  var img = document.createElement('img');
  img.width = Math.floor(Math.random() * 180) + 150
  img.setAttribute('src', windy_url);
  document.getElementsByTagName('body')[0].appendChild(div);
  div.appendChild(img);
};

