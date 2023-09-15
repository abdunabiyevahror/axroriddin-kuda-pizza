"use strict";

let basket = [];

function uniqueID() {
    return Date.now();
}

let addToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

let getFromStorage = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : undefined;
};

if (getFromStorage("basket")) {
    basket = getFromStorage("basket");

    renderBasketItems();
    changeAmount();
    calcTotalPrice();
}

function addProductToBasket() {
    let itemImage = document.querySelector(".item-popup__img");
    let itemTitle = document.querySelector(".item-popup__title");
    let itemPrice = document.querySelector(".item-popup__full-price");
    let itemDough = document.querySelector(".item-popup__dough-label._active");
    let itemSize = document.querySelector(".item-popup__size-label._active");
    let itemRoll = document.querySelector(".item-popup__roll-label._active");

    let itemsAmount = document.querySelectorAll(".basket-item__amount");
    let item = {};

    if (itemDough.parentElement.classList.contains("_active") && itemSize.parentElement.classList.contains("_active")) {
        item = {
            id: uniqueID(),
            img: itemImage.src,
            title: itemTitle.textContent,
            price: itemPrice.textContent,
            dough: itemDough.textContent,
            size: itemSize.textContent,
            amount: itemsAmount.textContent || 1,
        };
    } else if (itemRoll.parentElement.classList.contains("_active")) {
        item = {
            id: uniqueID(),
            img: itemImage.src,
            title: itemTitle.textContent,
            price: itemPrice.textContent,
            roll: itemRoll.textContent,
            amount: itemsAmount.textContent || 1,
        };
    } else {
        item = {
            id: uniqueID(),
            img: itemImage.src,
            title: itemTitle.textContent,
            price: itemPrice.textContent,
            amount: itemsAmount.textContent || 1,
        };
    }

    if (basket.length > 0) {
        let counter = 0;
        for (let i = 0; i < basket.length; i++) {
            if (basket[i].title === item.title && basket[i].price === item.price) {
                let value = itemsAmount[i].textContent;
                basket[i].amount = ++value;
            } else {
                counter++;
            }
        }
        if (counter == basket.length) {
            basket.push(item);
        }
    } else {
        basket.push(item);
    }

    addToStorage("basket", basket);

    renderBasketItems();

    makeDefaultItemPopup();
    removeCheckedLabels();

    changeAmount();

    calcTotalPrice();
}

function renderBasketItems(basketList = basket) {
    let basketListBlock = document.querySelector(".basket-popup__row");
    basketListBlock.innerHTML = "";

    basketList.forEach(({ id, img, title, price, dough, size, roll, amount }) => {
        let productItem = document.createElement("div");
        productItem.classList.add("basket-popup__basket-item");
        productItem.dataset.basketIndex = id;

        let productImgContainer = document.createElement("div");
        productImgContainer.classList.add("basket-item__img--container");
        let productImg = document.createElement("img");
        productImg.classList.add("basket-item__img");
        productImg.setAttribute("src", img);
        productImg.setAttribute("alt", title);

        let productDescr = document.createElement("div");
        productDescr.classList.add("basket-item__descr");

        let productTitle = document.createElement("p");
        productTitle.classList.add("basket-item__title");
        productTitle.innerText = title;

        let productView = document.createElement("p");
        productView.classList.add("basket-item__view");

        if (dough && size) {
            productView.innerText = `${dough}, ${size}`;
        } else if (roll) {
            productView.innerText = roll;
        } else {
            productView.innerText = "";
        }

        let productControlsBlock = document.createElement("div");
        productControlsBlock.classList.add("basket-item__controls-block");

        let productAmountPanel = document.createElement("div");
        productAmountPanel.classList.add("basket-item__amount-panel");

        let productButtonMinus = document.createElement("button");
        productButtonMinus.classList.add("basket-item__button");
        productButtonMinus.classList.add("basket-item__button-minus");
        productButtonMinus.innerText = "-";

        let productAmount = document.createElement("span");
        productAmount.classList.add("basket-item__amount");
        productAmount.innerText = amount;

        let productButtonPlus = document.createElement("button");
        productButtonPlus.classList.add("basket-item__button");
        productButtonPlus.classList.add("basket-item__button-plus");
        productButtonPlus.innerText = "+";

        let productCurrency = document.createElement("p");
        productCurrency.classList.add("basket-item__currency");
        productCurrency.innerText = `${price.match(/\d+/)} ₽`;

        productImgContainer.append(productImg);
        productAmountPanel.append(productButtonMinus);
        productAmountPanel.append(productAmount);
        productAmountPanel.append(productButtonPlus);
        productControlsBlock.append(productAmountPanel);
        productControlsBlock.append(productCurrency);
        productDescr.append(productTitle);
        productDescr.append(productView);
        productDescr.append(productControlsBlock);
        productItem.append(productImgContainer);
        productItem.append(productDescr);
        basketListBlock.append(productItem);
    });
}

function makeDefaultItemPopup() {
    let popupBackground = document.querySelector(".popup-wrapper");

    let itemPopup = document.querySelector(".item-popup");

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

    popupBackground.classList.remove("_active");

    itemPopup.classList.remove("_active");

    document.body.classList.remove("fixed-body");

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
}

function removeCheckedLabels() {
    let labelItems = document.querySelectorAll(".filter-popup__label");
    labelItems.forEach((label) => {
        if (label.classList.contains("_active")) {
            label.classList.remove("_active");
        }
    });
}

function changeAmount() {
    let amountBlocks = document.querySelectorAll(".basket-item__amount-panel");

    amountBlocks.forEach((amountItem) => {
        amountItem.addEventListener("click", function (e) {
            const target = e.target;
            if (target.closest(".basket-item__button")) {
                let basketItemWrapper = target.closest(".basket-popup__basket-item");

                let basketItem = basket.find((item) => item.id == basketItemWrapper.dataset.basketIndex);
                if (target.classList.contains("basket-item__button-plus")) {
                    ++basketItem.amount;

                    addToStorage("basket", basket);
                } else if (target.classList.contains("basket-item__button-minus")) {
                    --basketItem.amount;

                    addToStorage("basket", basket);
                }

                target.closest(".basket-item__amount-panel").querySelector(".basket-item__amount").textContent =
                    basketItem.amount;

                if (basketItem.amount <= 0) {
                    let basketUIndex = target.closest(".basket-popup__basket-item").dataset.basketIndex;
                    const basketIdx = basket.findIndex(({ id }) => id == basketUIndex);
                    if (basketIdx !== -1) {
                        basket.splice(basketIdx, 1);

                        addToStorage("basket", basket);

                        renderBasketItems();
                        changeAmount();
                    }
                }
            }
            calcTotalPrice();
        });
    });
}

function calcTotalPrice() {
    let headerTotalPrice = document.querySelector(".header-bottom__basket-sum");
    let basketTotalPrice = document.querySelector(".basket-popup__price");

    let basketItemsPrice = document.querySelectorAll(".basket-item__currency");
    let basketItemsAmount = document.querySelectorAll(".basket-item__amount");

    let fullPrice = 0;

    for (let i = 0; i < basket.length; i++) {
        fullPrice += parseInt(basketItemsPrice[i].textContent) * parseInt(basketItemsAmount[i].textContent);
    }

    headerTotalPrice.textContent = `${fullPrice} ₽`;
    basketTotalPrice.textContent = `Итого: ${fullPrice} ₽`;
}

let addButton = document.querySelector(".item-popup__button");

addButton.addEventListener("click", addProductToBasket);
