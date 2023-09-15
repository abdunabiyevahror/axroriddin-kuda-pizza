"use strict";

// drop-down menu

const menuArrow = document.querySelector("button.nav-list__link");
menuArrow.addEventListener("click", function (e) {
    menuArrow.classList.toggle("_active");
});

document.addEventListener("click", function (e) {
    if (e.target !== menuArrow) {
        menuArrow.classList.remove("_active");
    }
});

// header appearance after scroll navigation block

const headerBlock = document.querySelector(".header");
const headerBlockHeight = headerBlock.offsetHeight;
const navigationBlock = document.querySelector(".nav");
const navigationBlockHeight = navigationBlock.offsetHeight;

window.addEventListener("scroll", function () {
    let scrollDistance = window.scrollY;
    const headerNavigationList = document.querySelector(".header-bottom__nav-list");
    const headerTopBlock = document.querySelector(".header__header-top");

    if (scrollDistance > headerBlockHeight + navigationBlockHeight + 30) {
        headerBlock.classList.add("header--fixed");
        navigationBlock.style.marginTop = `${headerBlockHeight + 30}px`;

        headerNavigationList.classList.add("header-bottom__nav-list--show");
        headerTopBlock.style.display = "none";
    } else {
        headerBlock.classList.remove("header--fixed");
        navigationBlock.style.marginTop = `30px`;

        headerNavigationList.classList.remove("header-bottom__nav-list--show");
        headerTopBlock.style.display = "flex";
    }
});
