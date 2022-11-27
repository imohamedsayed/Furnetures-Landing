let navUl = document.querySelectorAll("header .navs ul li");
let sideBar = document.querySelector(".sideBar");
let sideBarUl = document.querySelector(".sideBar ul");

navUl.forEach((li) => {
  let copyLi = document.createElement("li");
  copyLi.innerHTML = li.innerHTML;
  copyLi.dataset.index = li.dataset.index;
  copyLi.className = li.className;

  sideBarUl.appendChild(copyLi);
});

// side bar toggling

let navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  sideBar.classList.toggle("open");
});

let closeBtn = document.querySelector(".sideBar .close");
closeBtn.addEventListener("click", () => {
  sideBar.classList.toggle("open");
});
