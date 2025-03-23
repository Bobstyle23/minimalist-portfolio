const openMenu = document.querySelector(".navigation__menu-btn");
const closeMenu = document.querySelector(".navigation__menu-btn--close");
const navigation = document.querySelector(".navigation");
const navigationListItems = navigation.childNodes[1].children;

const toggleMenu = (topValue) => {
  navigation.style.top = topValue;
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
};

closeMenu.addEventListener("click", () => toggleMenu("-100%"));

openMenu.addEventListener("click", () => toggleMenu("8.8rem"));

for (let item of navigationListItems) {
  item.addEventListener("click", () => {
    setTimeout(() => {
      toggleMenu("-100%");
    }, 200);
  });
}
