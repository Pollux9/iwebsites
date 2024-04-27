function reloadPage(){
  document.getElementById('reloadImg').style.rotate="360deg";
  setTimeout(function(){
    window.location.href="index.html";
  }, 200);
}