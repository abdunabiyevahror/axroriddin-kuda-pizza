import { pizzas, rolls, sushies, sets, salads, snacks, desserts, sauces, drinkables } from "./objects.js";

function printProducts(array, blockClass) {
    const productsList = document.createElement("div");
    productsList.classList.add("products__row");
    productsList.classList.add(blockClass);
    productsList.innerHtml = "";

    array.forEach((element) => {
        const productsItem = document.createElement("div");
        productsItem.classList.add("products__products-item");

        const productsImgWrapper = document.createElement("div");
        productsImgWrapper.classList.add("products-item__img--container");

        const productsImg = document.createElement("img");
        productsImg.classList.add("products-item__img");
        productsImg.setAttribute("src", element.img);
        productsImg.setAttribute("alt", element.title);

        const productsDescrip = document.createElement("div");
        productsDescrip.classList.add("products-item__descr");

        const productsTitle = document.createElement("p");
        productsTitle.classList.add("products-item__title");
        productsTitle.innerText = element.title;

        const productsIngridients = document.createElement("p");
        productsIngridients.classList.add("products-item__recept");
        if (element.descr !== undefined) {
            productsIngridients.innerText = element.descr;
        }

        const productsBtn = document.createElement("p");
        productsBtn.classList.add("products-item__btn");
        productsBtn.innerText = element.button;

        const productsPrice = document.createElement("p");
        productsPrice.classList.add("products-item__currency");
        productsPrice.innerText = `от ${element.currency} ₽`;

        productsImgWrapper.append(productsImg);

        productsDescrip.append(productsTitle);
        productsDescrip.append(productsIngridients);
        productsDescrip.append(productsBtn);
        productsDescrip.append(productsPrice);

        productsItem.append(productsImgWrapper);
        productsItem.append(productsDescrip);

        productsList.append(productsItem);
    });

    const productsBody = document.querySelector(`.${blockClass}`);
    productsBody.append(productsList);
}

function unionPrintFunctions() {
    printProducts(pizzas, "products-pizzas");
    printProducts(rolls, "products-rolls");
    printProducts(sushies, "products-sushies");
    printProducts(sets, "products-sets");
    printProducts(salads, "products-salads");
    printProducts(snacks, "products-snacks");
    printProducts(desserts, "products-desserts");
    printProducts(sauces, "products-sauces");
    printProducts(drinkables, "products-drinkables");
}

document.addEventListener("DOMContentLoaded", unionPrintFunctions());
