import { headerTemplate,productTemplate, footerTemplate } from "./js/templates.js";
import renderData from "./js/section/renderData.js";
import { fetchData } from "./js/other/fetchData.js";

const kurv = JSON.parse(localStorage.getItem("kurv")) || [];

document.body.insertAdjacentHTML("afterbegin", headerTemplate(kurv.length));
document.body.insertAdjacentHTML("beforeend", footerTemplate());

const { error, isLoading, data } = await fetchData({
    urlEnd: "/products",
});

renderData({
    idSelector: "#products",
    template: productTemplate,
    slice: 3,
    isSlider: true,
    error,
    isLoading,
    data,
});
