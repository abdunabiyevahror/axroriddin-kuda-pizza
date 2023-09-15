"use strict";

let checkboxItems = document.querySelectorAll(".filter-popup__checkbox");
let labelItems = document.querySelectorAll(".filter-popup__label");

let checkboxItemsArray = Array.from(checkboxItems);
let labelItemsArray = Array.from(labelItems);

labelItemsArray.forEach((label) => {
    label.addEventListener("click", function (e) {
        e.preventDefault();
        let index = labelItemsArray.indexOf(label);
        labelItemsArray[index].classList.toggle("_active");
    });
});

let allItems = document.querySelectorAll(".products__products-item");
let allItemDescriptions = document.querySelectorAll(".products-item__recept");

let allItemsArray = Array.from(allItems);
let allItemDescriptionsArray = Array.from(allItemDescriptions);

let pizzaItemsArray = [];
let rollItemsArray = [];

let pizzaDescriptionsArray = [];
let rollDescriptionsArray = [];

let pizzaLabelItems = [];
let rollLabelItems = [];

let filteredPizzaLabelsArray = [];
let filteredRollLabelsArray = [];

for (let i = 0; i < allItemsArray.length; i++) {
    if (allItemsArray[i].parentElement.classList.contains("products-pizzas")) {
        pizzaItemsArray.push(allItemsArray[i]);
        pizzaDescriptionsArray.push(allItemDescriptionsArray[i]);
    }
    if (allItemsArray[i].parentElement.classList.contains("products-rolls")) {
        rollItemsArray.push(allItemsArray[i]);
        rollDescriptionsArray.push(allItemDescriptionsArray[i]);
    }
}

for (let i = 0; i < labelItemsArray.length; i++) {
    if (i < 28) {
        pizzaLabelItems.push(labelItemsArray[i]);
    } else {
        rollLabelItems.push(labelItemsArray[i]);
    }
}

// pizza filter

let pizzaFilterApplyButton = document.querySelector(".filter-popup__pizza-apply-button");

pizzaFilterApplyButton.addEventListener("click", function (e) {
    e.preventDefault();
    resetFilteredPizzaItems();
    showFilteredPizzaList();
    closeFilterPopup();
});

let pizzaFilterResetButton = document.querySelector(".filter-popup__pizza-reset-button");

pizzaFilterResetButton.addEventListener("click", function (e) {
    e.preventDefault();
    resetFilteredPizzaItems();

    labelItemsArray.forEach((label) => {
        label.classList.remove("_active");
    });

    closeFilterPopup();
});

// roll filter

let rollFilterApplyButton = document.querySelector(".filter-popup__roll-apply-button");

rollFilterApplyButton.addEventListener("click", function (e) {
    e.preventDefault();
    resetFilteredRollItems();
    showFilteredRollList();
    closeFilterPopup();
});

let rollFilterResetButton = document.querySelector(".filter-popup__roll-reset-button");

rollFilterResetButton.addEventListener("click", function (e) {
    e.preventDefault();
    resetFilteredRollItems();

    labelItemsArray.forEach((label) => {
        label.classList.remove("_active");
    });

    closeFilterPopup();
});

// functions

function showFilteredPizzaList() {
    for (let i = 0; i < pizzaLabelItems.length; i++) {
        if (pizzaLabelItems[i].classList.contains("_active")) {
            filteredPizzaLabelsArray.push(pizzaLabelItems[i]);
        }
    }

    if (filteredPizzaLabelsArray.length > 0) {
        outer: for (let i = 0; i < pizzaDescriptionsArray.length; i++) {
            for (let j = 0; j < filteredPizzaLabelsArray.length; j++) {
                if (
                    pizzaDescriptionsArray[i].textContent.indexOf(
                        filteredPizzaLabelsArray[j].textContent.toLowerCase()
                    ) != -1
                ) {
                    pizzaItemsArray[i].classList.add("_active");
                    continue outer;
                }
            }
        }

        for (let i = 0; i < pizzaItemsArray.length; i++) {
            if (!pizzaItemsArray[i].classList.contains("_active")) {
                pizzaItemsArray[i].classList.add("_hiden");
            }
        }
    }
}

function resetFilteredPizzaItems() {
    if (filteredPizzaLabelsArray.length > 0) {
        filteredPizzaLabelsArray = [];
    }

    for (let i = 0; i < pizzaItemsArray.length; i++) {
        if (pizzaItemsArray[i].classList.contains("_hiden")) {
            pizzaItemsArray[i].classList.remove("_hiden");
        }
        if (pizzaItemsArray[i].classList.contains("_active")) {
            pizzaItemsArray[i].classList.remove("_active");
        }
    }
}

function showFilteredRollList() {
    for (let i = 0; i < rollLabelItems.length; i++) {
        if (rollLabelItems[i].classList.contains("_active")) {
            filteredRollLabelsArray.push(rollLabelItems[i]);
        }
    }

    if (filteredRollLabelsArray.length > 0) {
        outer: for (let i = 0; i < rollDescriptionsArray.length; i++) {
            for (let j = 0; j < filteredRollLabelsArray.length; j++) {
                if (
                    rollDescriptionsArray[i].textContent.indexOf(
                        filteredRollLabelsArray[j].textContent.toLowerCase()
                    ) != -1
                ) {
                    rollItemsArray[i].classList.add("_active");
                    continue outer;
                }
            }
        }

        for (let i = 0; i < rollItemsArray.length; i++) {
            if (!rollItemsArray[i].classList.contains("_active")) {
                rollItemsArray[i].classList.add("_hiden");
            }
        }
    }
}

function resetFilteredRollItems() {
    if (filteredRollLabelsArray.length > 0) {
        filteredRollLabelsArray = [];
    }

    for (let i = 0; i < rollItemsArray.length; i++) {
        if (rollItemsArray[i].classList.contains("_hiden")) {
            rollItemsArray[i].classList.remove("_hiden");
        }
        if (rollItemsArray[i].classList.contains("_active")) {
            rollItemsArray[i].classList.remove("_active");
        }
    }
}

function closeFilterPopup() {
    let popupBackground = document.querySelector(".popup-wrapper");

    let pizzaFilterPopup = document.querySelector(".pizza-filter-popup");
    let rollsFilterPopup = document.querySelector(".rolls-filter-popup");

    popupBackground.classList.remove("_active");
    pizzaFilterPopup.classList.remove("_active");
    rollsFilterPopup.classList.remove("_active");
    document.body.classList.remove("fixed-body");
}
