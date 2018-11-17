// helper to act like setInterval but use requestAnimationFrame if its available
// with a fallback to setInterval if not

const requestInterval = (fn, delay = 0) => {
  if( !window.requestAnimationFrame && 
      !window.webkitRequestAnimationFrame && 
      !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) &&
      !window.oRequestAnimationFrame && 
      !window.msRequestAnimationFrame ){
        return window.setInterval(fn, delay);
      }
      
  var start = new Date().getTime(),
    handle = new Object();
    
  function loop() {
    var current = new Date().getTime(),
      delta = current - start;
      
    if(delta >= delay) {
      fn.call();
      start = new Date().getTime();
    }
    handle.value = requestAnimationFrame(loop);
  };
  
  handle.value = requestAnimationFrame(loop);
  return handle;
}

export default requestInterval