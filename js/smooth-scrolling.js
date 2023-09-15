"use strict";

const menuLinks = document.querySelectorAll("a[data-goto]");

if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue =
                gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth",
            });
            e.preventDefault();
        }
    }
}

const navMenuLinks = document.querySelectorAll("[data-goto-nav]");

if (navMenuLinks.length > 0) {
    navMenuLinks.forEach((navMenuLink) => {
        navMenuLink.addEventListener("click", onNavMenuLinkClick);
    });

    function onNavMenuLinkClick(e) {
        const navMenuLink = e.target;
        //e.preventDefault();
        if (navMenuLink.dataset.gotoNav && document.querySelector(navMenuLink.dataset.gotoNav)) {
            const gotoNavBlock = document.querySelector(navMenuLink.dataset.gotoNav);
            const gotoNavBlockValue =
                gotoNavBlock.getBoundingClientRect().top +
                pageYOffset -
                document.querySelector("header").offsetHeight +
                40;
            window.scrollTo({
                top: gotoNavBlockValue,
                behavior: "smooth",
            });
        }
    }
}
