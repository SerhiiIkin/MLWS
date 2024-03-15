import {
    headerTemplate,
    footerTemplate,
    singleProductTemplate,
    kurvLinkTemplate,
} from "../js/templates.js";
import renderData from "../js/section/renderData.js";
import { fetchData } from "../js/other/fetchData.js";

const kurv = JSON.parse(localStorage.getItem("kurv")) || [];

document.body.insertAdjacentHTML("afterbegin", headerTemplate(kurv.length));
document.body.insertAdjacentHTML("beforeend", footerTemplate());

const id = new URLSearchParams(location.search).get("id");

const { error, isLoading, data } = await fetchData({
    urlEnd: `/products/${id}`,
});

renderData({
    idSelector: "#product",
    template: singleProductTemplate,
    isSlider: true,
    error,
    isLoading,
    data,
});

const btnAddKurv = document.querySelector("#btn-add-kurv");
const quantityInput = document.querySelector("#quantityInput");

btnAddKurv.addEventListener("click", onBtnAddClick);

const isProduct = kurv.find((el) => el.id === data.id);
if (isProduct?.quantity) quantityInput.value = isProduct.quantity;

function onBtnAddClick() {
    const message = document.createElement("span");
    const linkKurvContainer = document.querySelector("#kurvLink");
    const pattern = /^[1-9]+[0-9]*$/;

    if (pattern.test(+quantityInput.value)) {
        message.classList.add(
            "text-16",
            "absolute",
            "-bottom-10",
            "left-0",
            "text-16AF0B"
        );
        if (!isProduct?.id) {
            data.quantity = +quantityInput.value;
            data.fullPrice = +quantityInput.value * data.price;
            kurv.push(data);

            message.textContent = "Tilføjet til kurv!";

            localStorage.setItem("kurv", JSON.stringify(kurv));
            setTimeout(() => {
                message.remove();
            }, 3000);
            linkKurvContainer.replaceChildren();
            linkKurvContainer.insertAdjacentHTML(
                "beforeend",
                kurvLinkTemplate(kurv.length)
            );
        } else {
            const updatedKurv = kurv.map((el) => {
                if (el.id === data.id) {
                    el.quantity = +quantityInput.value;
                    el.fullPrice = +el.quantity * +el.price;
                    return el;
                }
                return el;
            });
            message.textContent = "Kurv er blevet opdateret!";
            localStorage.setItem("kurv", JSON.stringify(updatedKurv));
        }
        btnAddKurv.insertAdjacentElement("afterend", message);
    } else {
        message.classList.add(
            "text-F60101",
            "text-16",
            "absolute",
            "-bottom-10",
            "left-0"
        );
        message.textContent = "kun tal!";
        btnAddKurv.insertAdjacentElement("afterend", message);
    }
    setTimeout(() => {
        message.remove();
    }, 3000);
}
