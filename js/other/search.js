import { ellipseSvg } from "../ui/ellipseSvg.js";
import { filteredProduct } from "../templates.js";
export default function search({ data }) {
    let filteredData;

    const searchProduct = document.querySelector("#searchProduct");
    const filteredProductsContainer =
        document.querySelector("#filteredProducts");

    searchProduct.addEventListener("input", onSearchProductInput);
    searchProduct.addEventListener("focus", (e) => {
        const inputValue = e.target.value
            .toLowerCase()
            .replace(/ /g, "")
            .trim("");
        const svg = e.target.closest("div").querySelector("svg");
        filteredProductsContainer.classList.add("active");
        inputValue.length > 0
            ? svg.classList.add("hidden")
            : svg.classList.remove("hidden");
    });
    searchProduct.addEventListener("blur", (e) =>
        setTimeout(() => {
            filteredProductsContainer.classList.remove("active");
        }, 200)
    );

    let time = 3000;
    let timeout;

    function onSearchProductInput(e) {
        const isLoading = true;
        const inputValue = e.target.value
            .toLowerCase()
            .replace(/ /g, "")
            .trim("");
        const svg = e.target.closest("div").querySelector("svg");

        clearTimeout(timeout);

        filteredProductsContainer.replaceChildren();
        if (isLoading) {
            filteredProductsContainer.insertAdjacentHTML(
                "beforeend",
                ellipseSvg({
                    stroke: "white",
                    fill: "blue",
                    width: 40,
                    height: 40,
                    classNames: "loader",
                })
            );
        }

        timeout = setTimeout(() => {
            filteredData = data.filter((d) =>
                d.title.toLowerCase().includes(inputValue)
            );
            filteredProductsContainer.replaceChildren();
            if (inputValue.length > 0) {
                filteredData.forEach((product) => {
                    filteredProductsContainer.insertAdjacentHTML(
                        "beforeend",
                        filteredProduct(product)
                    );
                });
            } else {
                filteredProductsContainer.insertAdjacentHTML(
                    "beforeend",
                    "Skriv noget at søge ...!"
                );
            }
            if (filteredData.length === 0) {
                filteredProductsContainer.insertAdjacentHTML(
                    "beforeend",
                    "Kan ikke finder!"
                );
            }
        }, time);

        inputValue.length > 0
            ? svg.classList.add("hidden")
            : svg.classList.remove("hidden");
    }
}
