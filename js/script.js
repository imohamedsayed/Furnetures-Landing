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
// header style
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (scrollY > 150) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// active nav bars

let navLinks = document.querySelectorAll("header li,.sideBar li, footer li"),
  sections = document.querySelectorAll("section");

console.log(navLinks);
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navTo(link.dataset.index);
  });
});

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let sectionOffsets = sec.getBoundingClientRect();

    if (sectionOffsets.top > -300 && sectionOffsets.top <= 150) {
      HandleActiveClasses(sec.id);
    }
  });
});

function HandleActiveClasses(sectionId) {
  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.dataset.index == sectionId) {
      a.classList.add("active");
    }
  });
}

function navTo(sectionId) {
  document.getElementById(`${sectionId}`).scrollIntoView({
    behavior: "smooth",
  });
  closeBtn.click();
}
