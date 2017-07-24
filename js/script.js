var marker = document.querySelector('.marker');
var wrapper = document.querySelector('.wrapper');

function getCoords(elem) {
return {
    top: elem.getBoundingClientRect().top,
    left: elem.getBoundingClientRect().left
  }
}

marker.onmousedown = function(e) {
  var coords = getCoords(this);
  var shiftX = e.pageX - coords.left;
  
    
    
    
  document.onmousemove = function(e) {
   var newLeft = e.pageX - shiftX - getCoords(wrapper).left;
    if(newLeft < 0) {
      newLeft = 0;
    }
    var rightEdge = wrapper.offsetWidth;
    
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }
    
    marker.style.left = newLeft + 'px';
  }
  
  marker.onmouseup = function() {
    document.onmousemove = null;
    marker.onmouseup = null;
  }
  
  marker.ondragstart = function() {
    return false;
  }
}