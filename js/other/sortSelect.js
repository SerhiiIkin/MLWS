import { productTemplate } from "../templates.js";
import renderData from "../section/renderData.js";
import { filtered } from "./filtered.js";

export default function sortSelect({ classSelector, idSelectorDataContainer }) {
    const sortSelect = document.querySelector(classSelector);
    const selectBtn = sortSelect.querySelector(".select-button");
    const selectedValue = sortSelect.querySelector(".selected-value");
    const optionsList = sortSelect.querySelectorAll(".select-dropdown li");
    const dataContainer = document.querySelector(idSelectorDataContainer);

    selectBtn.addEventListener("click", () => {
        sortSelect.classList.toggle("active");
        selectBtn.setAttribute(
            "aria-expanded",
            selectBtn.getAttribute("aria-expanded") === "true"
                ? "false"
                : "true"
        );
    });

    optionsList.forEach((option) => {
        option.addEventListener("click", handler);
    });

    function handler(e) {
        if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
            selectedValue.textContent = this.children[1].textContent;
            sortSelect.classList.remove("active");
            dataContainer.replaceChildren();
            switch (selectedValue.textContent) {
                case "sort by name":
                    filtered.data = sortDataString(filtered.data, "title");
                    renderData({
                        idSelector: idSelectorDataContainer,
                        template: productTemplate,
                        isSlider: true,
                        data: filtered.data,
                    });
                    break;
                case "sort by price":
                    filtered.data = sortDataNum(filtered.data);
                    renderData({
                        idSelector: idSelectorDataContainer,
                        template: productTemplate,
                        isSlider: true,
                        data: filtered.data,
                    });
                    break;
                case "sort by brand":
                    filtered.data = sortDataString(filtered.data, "brand");
                    renderData({
                        idSelector: idSelectorDataContainer,
                        template: productTemplate,
                        isSlider: true,
                        data: filtered.data,
                    });
                    break;
                case "sort by category":
                    filtered.data = sortDataString(filtered.data, "category");
                    renderData({
                        idSelector: idSelectorDataContainer,
                        template: productTemplate,
                        isSlider: true,
                        data: filtered.data,
                    });
                    break;
                default:
                    filtered.data = sortDataString(filtered.data, "title");
                    renderData({
                        idSelector: idSelectorDataContainer,
                        template: productTemplate,
                        isSlider: true,
                        data: filtered.data,
                    });
                    break;
            }
        }
    }

    function sortDataNum(data) {
        return data.sort((a, b) => a.price - b.price);
    }

    function sortDataString(data, value) {
        return data.sort((a, b) => {
            const nameA = a[value].toUpperCase(); // ignore upper and lowercase
            const nameB = b[value].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
    }
}