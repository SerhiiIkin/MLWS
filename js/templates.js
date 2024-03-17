export const kurvLinkTemplate = (kurvLength) => `<div class="relative">
<span class="text-13 ${
    kurvLength > 0 ? "text-9EB211" : "text-16AF0B"
}  p-5 absolute -top-10 right-75p">${kurvLength}</span>
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" fill="currentColor" class="${
    kurvLength > 0 ? "text-9EB211" : "text-16AF0B"
}" viewBox="0 0 16 16">
<path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/></svg>   
</div>`;

export const headerTemplate = (kurvLength = 0, isHoved=false) => `
    <header class="header h-header fixed z-30  w-full p-b-20 bg-color-2931AE">
            <div class="container flex align-i-c">
                <a href="${isHoved ? ".": ".."}/" class="text-16AF0B">MLWS</a>
                <a id="kurvLink" href="${isHoved ? ".": ".."}/kurv/index.html" class="ml-auto mr-10 md-order-3 md-ml-i">
                    <div class="relative">
                        <span class="text-13 ${
                            kurvLength > 0 ? "text-9EB211" : "text-16AF0B"
                        }  p-5 absolute -top-10 right-75p">${kurvLength}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" fill="currentColor" class="${
                            kurvLength > 0 ? "text-9EB211" : "text-16AF0B"
                        }" viewBox="0 0 16 16">
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/></svg>   
                    </div>
                </a>
                <div class="header__menu  md-opacity-1 md-visibility-v md-relative md-bg-t md-top-initial md-p-i md-w-i md-order-2 md-ml-auto">
                    <ul class="container  md-flex gap-10">
                        <li class="pb-20  text-white text-20-24 md-p-i">
                            <a href="${isHoved ? ".": ".."}/kurv/index.html" class="md-text-16AF0B hover-md-text-16AF0B">Kurv</a>
                        </li>
                        <li class="text-white text-20-24">
                            <a href="${isHoved ? ".": ".."}/products/index.html" class="md-text-16AF0B">Produkter</a>
                        </li>
                    </ul>
                </div>
                <label class="header__burger-menu-btn md-hidden" for="burger-menu-btn">
                    <span></span>
                    <input id="burger-menu-btn" type="checkbox" class="hidden" />
                </label>
            </div>
        </header>
`;

export const footerTemplate = () => `<footer class="bg-3A19191 p-b-20 mt-auto">
<div class="container grid justify-c-s-b  grid-rows-2-50 gap-10">
    <ul class="flex grid-row-full align-i-c gap-10">
        <li>
            <a href="#" class=""
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="blue"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                    /></svg
            ></a>
        </li>
        <li>
            <a href="#" class=""
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="red"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                    /></svg
            ></a>
        </li>
        <li>
            <a href="#" class=""
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="blue"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"
                    /></svg
            ></a>
        </li>
        <li>
            <a href="#" class=""
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="red"
                    class="bi bi-youtube"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"
                    /></svg
            ></a>
        </li>
    </ul>
    <a href="tel:+4550246519" class="grid-col-2 text-black">+4550246519</a>
    <a href="mailto:messileonl@gmail.com" class="grid-col-2 text-black">messileonl@gmail.com</a>
</div>
</footer>`;

export const imgTemplate = (image, alt) =>
    `<img src="${image}"  alt="${alt}"/>`;

export const kurvProductTemplate = (product) => {
    const { thumbnail, title, quantity, fullPrice, price, id } = product;

    return `
   <div class="border-b-d pb-10">
      <div data-id="${id}" class="container grid grid-cols-4 grid-rows-2-50 justify-i-c gap-10">
            <a href="../single-product/index.html?id=${id}" class="grid-rows-full cursor-pointer"><img src="${thumbnail}" alt="${title}" /></a>
            <input type="number" value=${quantity} class="max-w-50 max-h-30 border rounded-20 p-5-10 grid-col-2 grid-row-1 input-product" />
            <p class="grid-col-2 grid-row-2 price">${price} kr</p>
            <h3 class="grid-col-3 grid-row-1">${title}</h3>
            <p class="grid-row-2 grid-col-3 price-full">${fullPrice} kr</p>
            <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="var(--color-F60101)" class="cursor-pointer grid-rows-full align-s-c remove-product" viewBox="0 0 16 16">
             <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
            </svg>
      </div>
   </div>
    `;
};

export const singleProductTemplate = (product) => {
    const {
        thumbnail,
        title,
        description,
        price,
        discountPercentage,
        brand,
        category,
    } = product;

    return `
    <div class="">
        <img src="${thumbnail}" alt="${title}" />
        <div class="container">
            <h3 class="text-25 pb-10 text-a-c text-bold">${title}</h3>
            <p class="pb-10 text-a-c">${description}</p>
           <div class="flex justify-c-s-b">
                <p class="pb-10 text-bold">${brand}</p>
                <p class="text-t-c pb-10 text-italic">${category}</p>
           </div>
           <div class="flex justify-c-s-b pb-20">
                <p class="text-F60101"> <span class="text-t-u">spar</span> ${discountPercentage.toFixed()}%</p>
                <span class="text-6EC97A">${price} kr</span>
           </div>
            <div class="${
                title.replace(/ /g, "").replace(/\./g, "").replace(/\d+/g, "") +
                "Container h-35dvh mb-20 max-w-500 m-i-auto"
            }">
                <div>
                    <div class="${title
                        .replace(/ /g, "")
                        .replace(/\./g, "")
                        .replace(/\d+/g, "")}"></div>
                </div>
            </div>   
            <div class="flex gap-10 relative pb-10">
                <input type="text" class="border max-w-45 p-5-10 rounded-20" value="1"  id="quantityInput"/>
                <button type="button" id="btn-add-kurv" class="bg-15CBB2 p-5 bg-color-15CBB2 rounded-20 text-white"> Tilføj </button>
            </div>
        </div>
    </div>
    `;
};
export const productTemplate = (product) => {
    const {
        thumbnail,
        title,
        description,
        price,
        discountPercentage,
        brand,
        category,
        id,
    } = product;

    return `
    <div class="grid grid-columns-2-50">
        <img class="grid-column-full rounded-top-20 w-full aspect-square" src="${thumbnail}" alt="${title}" />
        <div class="${
            title.replace(/ /g, "").replace(/\./g, "").replace(/\d+/g, "") +
            "Container"
        }">
            <div>
                <div class="${title
                    .replace(/ /g, "")
                    .replace(/\./g, "")
                    .replace(/\d+/g, "")}"></div>
            </div>
        </div>    
        <div class="bg-prod-info text-a-r p-10 text-16 relative">
            <h3 class="text-20 text-white pb-10">${title}</h3>
            <p class="pb-10 text-white">${description.slice(0, 20)}...</p>
            <p class="pb-10 text-white text-bold">${brand}</p>
            <p class="text-t-c text-white pb-10 text-italic">${category}</p>
            <div class="grid grid-columns-2-60-40 align-i-c pb-20">
                <p class="text-F60101 text-white rounded-20 bg-16AF0B p-5-15 text-a-c"> <span class="text-t-u">spar</span> ${discountPercentage.toFixed()}%</p>
                <span class="text-6EC97A">${price} kr</span>
            </div>
            <a class="bg-color-2931AE text-white p-5 rounded-20" href="../single-product/index.html?id=${id}">Mere info</a>
        </div>
    </div>
`;
};

export const filteredProduct = (product) => {
    const { title, price, discountPercentage, id } = product;

    return `
    <li class="border p-10 rounded-20 mb-20  mb-20 text-white bg-color-2931AE">
       <a href="../single-product/index.html?id=${id}" class="flex gap-10  justify-c-s-b">
       <div>${title}</div>
       <div>${price}kr</div>
       <div>${discountPercentage}%</div>
       </a>
    </li>
    `;
};
