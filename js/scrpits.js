const tabItems = document.querySelectorAll(".tabs__item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
const tabContainer = document.querySelector(".container-tab");

// =====================================================================
// listen for tab click in icons
tabItems.forEach((item) => item.addEventListener("click", selectItem));

// Select tab-content where Grid photos is
function selectItem(e) {
  e.preventDefault();
  removeBorder();
  removeShow();
  // createTabs();
  // Add class with red Border
  this.classList.add("tabs__item--border");
  // Asign the ID to a variable so we can call it back
  const idItem = this.id;
  // get item content from DOM
  // console.log("selectItem -> idItem", idItem)
  const tabContentItem = document.querySelector(`#${idItem}-content`);
  tabContentItem.classList.add("show");
}

// Remove red border when it is not selected
function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tabs__item--border"));
}
// Remove SHOW class so we can see the content
function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

// ========Open Close NavBar=====================
const hambOpen = document.querySelector(".hamb");
hambOpen.addEventListener("click", openMenu);
const hambClose = document.querySelector(".menu__close");
hambClose.addEventListener("click", closeMenu);
const menu = document.querySelector(".menu__list");

function openMenu() {
  menu.classList.remove("close");
  menu.classList.add("open");
}

function closeMenu() {
  menu.classList.remove("open");
  menu.classList.add("close");
}

// ============= When click on NavLinks, close Navbar===============

const linkMenus = document.querySelectorAll(".menu__item");

linkMenus.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function suscribir(event) {
  console.log(event.target);
}
