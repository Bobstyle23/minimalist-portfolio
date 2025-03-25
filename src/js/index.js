const openMenu = document.querySelector(".menu__btn--open");
const closeMenu = document.querySelector(".menu__btn--close");
const navigation = document.querySelector(".navigation");
const navigationListItems =
  document.querySelector(".navigation__list").children;
const activePageLink = window.location.href.split("/").filter(Boolean);

const toggleMenu = () => {
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
};

closeMenu.addEventListener("click", () => {
  navigation.style.top = "-100%";
  toggleMenu();
});

openMenu.addEventListener("click", () => {
  navigation.style.top = "8.8rem";
  toggleMenu();
});

for (let menu of navigationListItems) {
  menu.addEventListener("click", () => {
    navigation.style.top = "-100%";
    toggleMenu();
  });
}

console.log(activePageLink[activePageLink.length - 1]);
