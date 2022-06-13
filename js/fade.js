window.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    console.log(window.scrollY);
    if (window.scrollY > 250) {
      document.getElementById("speech1").classList.add("active");
      document.getElementById("speech2").classList.add("active");
      document.getElementById("speech3").classList.add("active");
    } else {
      document.getElementById("speech1").classList.remove("active");
      document.getElementById("speech2").classList.remove("active");
      document.getElementById("speech3").classList.remove("active");
    }
    if (window.scrollY > 890) {
      document.getElementById("length_line").classList.add("active");
    } else {
      document.getElementById("length_line").classList.remove("active");
    }
    if (window.scrollY > 2000) {
      document.getElementById("title1").classList.add("active");
    } else {
      document.getElementById("title1").classList.remove("active");
    }
    if (window.scrollY > 7010) {
      document.getElementById("title2").classList.add("active");
    } else {
      document.getElementById("title2").classList.remove("active");
    }
    if (window.scrollY > 7830) {
      document.getElementById("title3").classList.add("active");
    } else {
      document.getElementById("title3").classList.remove("active");
    }
    if (window.scrollY > 9150) {
      document.getElementById("title4").classList.add("active");
    } else {
      document.getElementById("title4").classList.remove("active");
    }
    if (window.scrollY > 9800) {
      document.getElementById("title5").classList.add("active");
    } else {
      document.getElementById("title5").classList.remove("active");
    }
  };
});
