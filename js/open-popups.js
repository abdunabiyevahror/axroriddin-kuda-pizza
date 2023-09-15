"use strict";

function removeCheckedLabels() {
    let labelItems = document.querySelectorAll(".filter-popup__label");
    labelItems.forEach((label) => {
        if (label.classList.contains("_active")) {
            label.classList.remove("_active");
        }
    });
}

let doughLabels = document.querySelectorAll("label.item-popup__dough-label");

if (doughLabels.length > 0) {
    doughLabels[0].classList.add("_active");

    doughLabels.forEach((label) => {
        label.addEventListener("click", function () {
            removeActiveLabel(doughLabels);
            label.classList.add("_active");
        });
    });
}

let sizeLabels = document.querySelectorAll(".item-popup__size-label");

if (sizeLabels.length > 0) {
    sizeLabels[0].classList.add("_active");

    sizeLabels.forEach((label) => {
        label.addEventListener("click", function () {
            removeActiveLabel(sizeLabels);
            label.classList.add("_active");
        });
    });
}

let rollLabels = document.querySelectorAll(".item-popup__roll-label");

if (rollLabels.length > 0) {
    rollLabels[0].classList.add("_active");

    rollLabels.forEach((label) => {
        label.addEventListener("click", function () {
            removeActiveLabel(rollLabels);
            label.classList.add("_active");
        });
    });
}

function removeActiveLabel(labelArray) {
    labelArray.forEach((label) => {
        if (label.classList.contains("_active")) {
            label.classList.remove("_active");
        }
    });
}

//open and close popup-menus

let popupBackground = document.querySelector(".popup-wrapper");

//open basket popup

let basketPopup = document.querySelector(".basket-popup");

let basketButton = document.querySelector(".header-bottom__basket-btn");

basketButton.addEventListener("click", function (e) {
    e.preventDefault();
    basketPopup.classList.add("_active");
    popupBackground.classList.add("_active");
    document.body.classList.add("fixed-body");
});

//open pizza filter popup

let pizzaFilterPopup = document.querySelector(".pizza-filter-popup");

let pizzaFilterButton = document.querySelector(".products__pizza-filter");

if (pizzaFilterButton !== null) {
    pizzaFilterButton.addEventListener("click", function (e) {
        e.preventDefault();
        pizzaFilterPopup.classList.add("_active");
        popupBackground.classList.add("_active");
        document.body.classList.add("fixed-body");
    });
}

//open rolls filter popup

let rollsFilterPopup = document.querySelector(".rolls-filter-popup");

let rollsFilterButton = document.querySelector(".products__rolls-filter");

if (rollsFilterButton !== null) {
    rollsFilterButton.addEventListener("click", function (e) {
        e.preventDefault();
        rollsFilterPopup.classList.add("_active");
        popupBackground.classList.add("_active");
        document.body.classList.add("fixed-body");
    });
}
//open item popup

let itemPopup = document.querySelector(".item-popup");

let itemButtons = document.querySelectorAll(".products__products-item");

let itemTitles = document.querySelectorAll(".products-item__title");
let itemDescriptions = document.querySelectorAll(".products-item__recept");
let itemImages = document.querySelectorAll(".products-item__img");
let itemCurrency = document.querySelectorAll(".products-item__currency");

let itemButtonsArray = Array.from(itemButtons);
let itemTitlesArray = Array.from(itemTitles);
let itemDescriptionsArray = Array.from(itemDescriptions);
let itemImagesArray = Array.from(itemImages);
let itemCurrencyArray = Array.from(itemCurrency);

let popupItemTitle = document.querySelector(".item-popup__title");
let popupItemDescription = document.querySelector(".item-popup__ingridients");
let popupItemImage = document.querySelector(".item-popup__img");
let popupItemCurrency = document.querySelector(".item-popup__full-price");

let itemAddBlock = document.querySelector(".item-popup__add-block");
let itemRollCheckboxBlock = document.querySelector(".item-popup__roll-type");
let itemDoughCheckboxBlock = document.querySelector(".item-popup__dough-type");
let itemSizeCheckboxBlock = document.querySelector(".item-popup__size-type");

let itemPizzaSvg = document.querySelector(".item-popup__pizza-title-svg");
let itemRollSvg = document.querySelector(".item-popup__roll-title-svg");
let itemSushiSvg = document.querySelector(".item-popup__sushi-title-svg");
let itemSetSvg = document.querySelector(".item-popup__set-title-svg");
let itemSalladSvg = document.querySelector(".item-popup__sallad-title-svg");
let itemSnackSvg = document.querySelector(".item-popup__snack-title-svg");
let itemDessertSvg = document.querySelector(".item-popup__dessert-title-svg");
let itemSauceSvg = document.querySelector(".item-popup__sauce-title-svg");
let itemDrinkableSvg = document.querySelector(".item-popup__drinkable-title-svg");

itemButtonsArray.forEach((item) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        itemPopup.classList.add("_active");
        popupBackground.classList.add("_active");
        document.body.classList.add("fixed-body");

        let index = itemButtonsArray.indexOf(item);

        let fullPrice = itemCurrencyArray[index].textContent.match(/\d+/);
        popupItemCurrency.innerText = `Итого: ${Math.round(fullPrice)} ₽`;

        sizeLabels[0].addEventListener("click", () => {
            fullPrice = itemCurrencyArray[index].textContent.match(/\d+/);
            popupItemCurrency.innerText = `Итого: ${Math.round(fullPrice)} ₽`;
        });
        sizeLabels[1].addEventListener("click", () => {
            fullPrice = itemCurrencyArray[index].textContent.match(/\d+/) * 1.2;
            popupItemCurrency.innerText = `Итого: ${Math.round(fullPrice)} ₽`;
        });
        sizeLabels[2].addEventListener("click", () => {
            fullPrice = itemCurrencyArray[index].textContent.match(/\d+/) * 1.4;
            popupItemCurrency.innerText = `Итого: ${Math.round(fullPrice)} ₽`;
        });

        popupItemTitle.innerText = itemTitlesArray[index].textContent;
        popupItemDescription.innerText = itemDescriptionsArray[index].textContent;
        popupItemImage.src = itemImagesArray[index].src;

        if (item.parentElement.classList.contains("products-pizzas")) {
            itemAddBlock.classList.add("_active");
            itemDoughCheckboxBlock.classList.add("_active");
            itemSizeCheckboxBlock.classList.add("_active");
            itemPizzaSvg.classList.add("_active");
        }
        if (item.parentElement.classList.contains("products-rolls")) {
            itemRollCheckboxBlock.classList.add("_active");
            itemRollSvg.classList.add("_active");
        }
        if (item.parentElement.classList.contains("products-sushies")) {
            itemSushiSvg.classList.add("_active");
        }
        if (item.parentElement.classList.contains("products-sets")) {
            itemSetSvg.classList.add("_active");
        }
        if (item.parentElement.classList.contains("products-salads")) {
            itemSalladSvg.classList.add("_active");
        }
        if (item.parentElement.classList.contains("products-snacks")) {
            itemSnackSvg.classList.add("_active");
        }
        if (item.parentElement.classList.contains("products-desserts")) {
            itemDessertSvg.classList.add("_active");
        }
        if (item.parentElement.classList.contains("products-sauces")) {
            itemSauceSvg.classList.add("_active");
        }
        if (item.parentElement.classList.contains("products-drinkables")) {
            itemDrinkableSvg.classList.add("_active");
        }
    });
});

//close button

let closePopupButtons = document.querySelectorAll(".close-btn");

closePopupButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", function (e) {
        e.preventDefault();
        removeClasses();
    });
});

//close popup

document.addEventListener("click", function (e) {
    if (e.target === popupBackground) {
        removeClasses();
    }
});

function removeClasses() {
    popupBackground.classList.remove("_active");

    basketPopup.classList.remove("_active");
    if (pizzaFilterPopup !== null) {
        pizzaFilterPopup.classList.remove("_active");
    }
    if (rollsFilterPopup !== null) {
        rollsFilterPopup.classList.remove("_active");
    }
    if (itemPopup !== null) {
        itemPopup.classList.remove("_active");
    }
    document.body.classList.remove("fixed-body");

    if (itemPopup) {
        itemAddBlock.classList.remove("_active");
        itemDoughCheckboxBlock.classList.remove("_active");
        itemSizeCheckboxBlock.classList.remove("_active");
        itemRollCheckboxBlock.classList.remove("_active");

        itemPizzaSvg.classList.remove("_active");
        itemRollSvg.classList.remove("_active");
        itemSushiSvg.classList.remove("_active");
        itemSetSvg.classList.remove("_active");
        itemSalladSvg.classList.remove("_active");
        itemSnackSvg.classList.remove("_active");
        itemDessertSvg.classList.remove("_active");
        itemSauceSvg.classList.remove("_active");
        itemDrinkableSvg.classList.remove("_active");

        removeActiveLabel(doughLabels);
        doughLabels[0].classList.add("_active");
        removeActiveLabel(sizeLabels);
        sizeLabels[0].classList.add("_active");
        removeActiveLabel(rollLabels);
        rollLabels[0].classList.add("_active");
    }

    removeCheckedLabels();
}
