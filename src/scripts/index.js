//Toggling the sidebar menu logic
const initApp = () => {
  const burger = document.getElementById("burger");
  const sidebar = document.getElementById("sidebar");
  const items = document.querySelectorAll(".close-side-menu");

  const toggleSidebarMenu = () => {
    sidebar.classList.toggle("toggle-sidebar");
  };

  burger.addEventListener("click", toggleSidebarMenu);

  items.forEach((item) => {
    item.addEventListener("click", toggleSidebarMenu);
  });
};

//Toggling the Popup logic

const togglePopUp = () => {
  const reserve = document.getElementById("reserve");
  const popup = document.getElementById("popup");
  const ok = document.getElementById("ok");

  const PopUp = () => {
    popup.classList.toggle("toggle-popup");
  };

  reserve.addEventListener("click", PopUp);
  ok.addEventListener("click", PopUp);
};

document.addEventListener("DOMContentLoaded", initApp);
document.addEventListener("DOMContentLoaded", togglePopUp);
