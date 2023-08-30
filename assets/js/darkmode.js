const toggleico = document.querySelector('.darkmode--toggle');
const toggle = document.querySelector('.darkmode');
const glass = document.querySelector('.home__glass');
const sidebar = document.querySelector('.home__sidebar');
const items = document.querySelectorAll('.home__sidebar--item');
toggle.addEventListener("click", function () {
  toggleico.classList.toggle("fa-sun");
  glass.classList.toggle("dark");
  sidebar.classList.toggle("dark");
  items.forEach(e=>{
      e.classList.toggle("dark")
  });
});