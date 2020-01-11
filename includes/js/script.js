$(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 100) {
              document.getElementById('navbar').style.backgroundColor = "#000000";
              document.getElementById('navbar').style.borderBottom = "1.5px solid white";
              document.getElementById('nav-but-active').style.color = "#c3073f";

          } else {
              document.getElementById('navbar').style.backgroundColor = "transparent";
              document.getElementById('nav-but-active').style.color = "white";
              document.getElementById('navbar').style.borderBottom = "none  ";
          }
        });
});
