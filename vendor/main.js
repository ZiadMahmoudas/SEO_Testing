let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

  });
});
const btn =  document.querySelector("#Book")
const btn1 =  document.querySelector("#Book1")
const btn2 =  document.querySelector("#Book2")
const btn3 =  document.querySelector("#Book3")
const btn4 =  document.querySelector("#Book4")
const btn5 =  document.querySelector("#Book5")
btn.addEventListener("click",function(){
  window.open('https://wa.me/966544778503', '_blank');
})
btn1.addEventListener("click",function(){
  window.open('https://wa.me/966544778503', '_blank');
})
btn2.addEventListener("click",function(){
  window.open('https://wa.me/966544778503', '_blank');
})
btn3.addEventListener("click",function(){
  window.open('https://wa.me/966544778503', '_blank');
})
btn4.addEventListener("click",function(){
  window.open('https://wa.me/966544778503', '_blank');
})
btn5.addEventListener("click",function(){
  window.open('https://wa.me/966544778503', '_blank');
})