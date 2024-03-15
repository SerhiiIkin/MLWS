import {
    headerTemplate,
    footerTemplate,
    kurvProductTemplate,
    kurvLinkTemplate,
} from "../js/templates.js";
import renderData from "../js/section/renderData.js";

const kurvData = JSON.parse(localStorage.getItem("kurv")) || [];

document.body.insertAdjacentHTML("afterbegin", headerTemplate(kurv.length));
document.body.insertAdjacentHTML("beforeend", footerTemplate());

function onRemoveProductSvgClick(e) {
    const id = e.target.closest("div").dataset.id;
    const kurvData = JSON.parse(localStorage.getItem("kurv"));
    const updatedKurv = kurvData.filter((item) => +item.id !== +id);
    localStorage.setItem("kurv", JSON.stringify(updatedKurv));
    renderKurv({ kurv: updatedKurv });
}

function onInputChange(e) {
    const id = e.target.closest("div").dataset.id;
    const kurvData = JSON.parse(localStorage.getItem("kurv"));
    const inputValue = +e.target.value;

    if (inputValue > 0) {
        const updatedKurv = kurvData.map((product) => {
            if (+product.id === +id) {
                product.quantity = inputValue
                product.fullPrice = inputValue * +product.price;
            }
            return product;
        });
        localStorage.setItem("kurv", JSON.stringify(updatedKurv));
        renderKurv({ kurv: updatedKurv });
    }
}

renderKurv({ kurv: kurvData });

function renderKurv({ kurv }) {
    const linkKurvContainer = document.querySelector("#kurvLink");
    if (kurv.length > 0) {
        renderData({
            idSelector: "#kurv",
            template: kurvProductTemplate,
            data: kurv,
        });

        const sum = document.querySelector("#sum");
        const removeProductBtns = document.querySelectorAll(".remove-product");
        const inputs = document.querySelectorAll(".input-product");

        removeProductBtns.forEach((btn) =>
            btn.addEventListener("click", onRemoveProductSvgClick)
        );
        inputs.forEach((input) =>
            input.addEventListener("change", onInputChange)
        );

        let initialValue = 0;
        const totalSum = kurv.reduce(
            (accumulator, currentValue) => accumulator + currentValue.fullPrice,
            initialValue
        );
        sum.textContent = totalSum;
    } else {
        const kurvContainer = document.querySelector("#kurv");
        const fullSum = document.querySelector("#fullSum");
        fullSum.classList.add("hidden");
        kurvContainer.replaceChildren();
        kurvContainer.insertAdjacentHTML(
            "beforeend",
            "<div class='pl-20'>Din kurv er tom!</div>"
        );
    }
    linkKurvContainer.replaceChildren();
    linkKurvContainer.insertAdjacentHTML(
        "beforeend",
        kurvLinkTemplate(kurv.length)
    );
}
