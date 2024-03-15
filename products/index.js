import {
    headerTemplate,
    footerTemplate,
    productTemplate,
} from "../js/templates.js";
import renderData from "../js/section/renderData.js";
import { fetchData } from "../js/other/fetchData.js";
import search from "../js/other/search.js";
import { filtered } from "../js/other/filtered.js";
import sortSelect from "../js/other/sortSelect.js"
import sortByPrice from "../js/other/sortByPrice.js";

const kurv = JSON.parse(localStorage.getItem("kurv")) || [];

document.body.insertAdjacentHTML("afterbegin", headerTemplate(kurv.length));
document.body.insertAdjacentHTML("beforeend", footerTemplate());

const { error, isLoading, data } = await fetchData({
    urlEnd: "/products",
});
filtered.data = data;

renderData({
    idSelector: "#products",
    template: productTemplate,
    isSlider: true,
    error,
    isLoading,
    data,
});

search({ data });
sortSelect({
    classSelector: ".sort-select",
    idSelectorDataContainer: "#products",
});
sortByPrice({ data });
