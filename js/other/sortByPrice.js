import { filtered } from "./filtered.js";
import renderData from "../section/renderData.js";
import { productTemplate } from "../templates.js";
export default function sortByPrice({data}) {
    let timeout;
    const pattern = /[^0-9]/;
    const minValue = document.querySelector("#minValue");
    const maxValue = document.querySelector("#maxValue");

    minValue.addEventListener("input", inputHandler);
    maxValue.addEventListener("input", inputHandler);

    function inputHandler(e) {
        clearTimeout(timeout);
        const value = e.target.value;
        if (pattern.test(value) || +minValue.value > +maxValue.value) {
            e.target.classList.add("invalid");
            return;
        }

        minValue.classList.remove("invalid");
        maxValue.classList.remove("invalid");

        if (+minValue.value < +maxValue.value) {
            timeout = setTimeout(() => {
                filtered.data = data.filter(
                    (d) =>
                        d.price >= +minValue.value && d.price <= +maxValue.value
                );
                renderData({
                    idSelector: "#products",
                    template: productTemplate,
                    isSlider: true,
                    data: filtered.data,
                });
            }, 3000);
        }
    }
}