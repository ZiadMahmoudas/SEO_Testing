let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

  });
});
const btn =  document.querySelectorAll("#Book");

btn.forEach(buttons=>{
buttons.addEventListener("click",function(){
  window.open('https://wa.me/966544778503', '_blank');
})
})


