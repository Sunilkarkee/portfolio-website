document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed('#element', {
      strings: ['UI/UX.', 'Web Developer.', 'Python Developer.', 'Java Developer.'],
      typeSpeed: 50,
      loop: true
  });
});

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}