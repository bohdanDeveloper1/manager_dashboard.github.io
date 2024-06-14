let ifNavIsOpen = false;
let wrapper = document.querySelector(".wrapper");
let customersContainer = document.querySelector(".customers-container");
let dashboardContent = document.querySelector(".dashboard__content");
let dashboardMenu = document.querySelector(".dashboard__menu");
let dashboardMenuContent = document.querySelector(".dashboard__menu__content");
let hamburgerMenuButtonClose = document.querySelector(".hamburger-menu__button-close");
let hamburgerMenuButtonOpen = document.querySelector(".hamburger-menu__button-open");
let searchInput = document.querySelector(".search-input");
let customerTableButtons = document.querySelectorAll(".customer-table__button-active, .customer-table__button-inactive, .data-page");
let hamburgerMenuButtonCloseMiniScreens = document.querySelector(".hamburger-menu__button-close-mini-screens");

function openNav() {
   try{
       ifNavIsOpen = true;
       customersContainer.classList.add('overlay');
       dashboardContent.classList.add('overlay');
       dashboardMenu.classList.add('dashboard__menu-active');
       // display = "none" для hamburgerMenuButtonOpen
       hamburgerMenuButtonOpen.style.display = "none";
       // показую кнопку hamburgerMenuButtonClose
       hamburgerMenuButtonClose.style.display = "block";
       checkWindowWidth();
   }catch (e){
       console.log(e)
   }
}

function closeNav() {
    try{
        ifNavIsOpen = false;
        customersContainer.classList.remove('overlay');
        dashboardContent.classList.remove('overlay');
        dashboardMenu.classList.remove('dashboard__menu-active');
        hamburgerMenuButtonOpen.style.display = "block";
        hamburgerMenuButtonClose.style.display = "none";
    }catch (e){
        console.log(e)
    }
}

function closeNavMiniScreen(){
    try{
        dashboardContent.style.display = "block";

        dashboardMenu.classList.remove("dashboard__menu-max");
        dashboardMenuContent.classList.remove("dashboard__menu__content-center");
        hamburgerMenuButtonCloseMiniScreens.style.display = "none";

        closeNav();
    }catch (e){
        console.log(e)
    }
}

function checkWindowWidth() {
  try{
      if (document.documentElement.clientWidth < 816 && ifNavIsOpen === true) {
          dashboardContent.style.display = "none";

          dashboardMenu.classList.add("dashboard__menu-max");
          dashboardMenuContent.classList.add("dashboard__menu__content-center");
          hamburgerMenuButtonCloseMiniScreens.style.display = "block";
      } else {
          dashboardContent.style.display = "block";

          dashboardMenu.classList.remove("dashboard__menu-max");
          dashboardMenuContent.classList.remove("dashboard__menu__content-center");
          hamburgerMenuButtonCloseMiniScreens.style.display = "none";
      }
  }catch (e){
      console.log(e)
  }
}

// Викликати функцію перевірки при завантаженні сторінки та після кожного змінення розміру вікна
window.addEventListener('load', checkWindowWidth);
window.addEventListener('resize', checkWindowWidth);

