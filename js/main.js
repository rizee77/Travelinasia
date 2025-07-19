window.onscroll = function() {changeNavbarBackground()};

function changeNavbarBackground() {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
}

// document.addEventListener('contextmenu', function(event) {
//   event.preventDefault();
// });

// document.addEventListener('keydown', function(event) {
//   //Cegah F12, Ctrl+Shift+I, dan Ctrl+U
//   if (event.key === "F12" || 
//       (event.ctrlKey && event.shiftKey && event.key === "I") || 
//       (event.ctrlKey && event.key === "U")) {
//     event.preventDefault();
//   }
// });

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1300){
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})