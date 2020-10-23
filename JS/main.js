
//NAVBAR/HEADING scrolling
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    document.getElementById('heading').style.display = 'none';
  }
  if (window.pageYOffset < 100) {
    document.getElementById('heading').style.display = 'block';
  }


};