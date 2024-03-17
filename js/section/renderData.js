import { ellipseSvg } from "../ui/ellipseSvg.js";
import { imgTemplate } from "../templates.js";
import Slider from "../other/Slider.js";

export default async function renderData({
    idSelector,
    template,
    isSlider,
    slice,
    error,
    isLoading,
    data,
    isHoved
}) {
    const dataContainer = document.querySelector(idSelector);
    let loading = true;
    loading &&
        dataContainer.insertAdjacentHTML(
            "beforeend",
            ellipseSvg({
                stroke: "blue",
                fill: "green",
                width: 40,
                height: 40,
                classNames: "loader justify-s-c",
            })
        );

    loading = isLoading;

    if (error) {
        dataContainer.replaceChildren();
        dataContainer.insertAdjacentHTML(
            "beforeend",
            `<div class="text-lr">${error}</div>`
        );
    }
    if (data?.length) {
        dataContainer.replaceChildren();
        data.slice(0, slice).forEach((d) => {
            dataContainer.insertAdjacentHTML("beforeend", template(d, isHoved));
            
            if (isSlider && d.images.length > 1) {
                const selector =
                "." +
                d.title
                    .replace(/ /g, "")
                    .replace(/\./g, "")
                    .replace(/\d+/g, "");
            const imagesContainer = dataContainer.querySelector(selector);
            d.images.forEach((image) =>
                imagesContainer.insertAdjacentHTML(
                    "beforeend",
                    imgTemplate(image, d.title)
                )
            );
                const sliderSelector = selector + "Container";
                Slider({
                    selector: sliderSelector,
                    buttons: true,
                    paggination: false,
                    draggable: true,
                });
            }
        });
    } else {
        dataContainer.replaceChildren();
        dataContainer.insertAdjacentHTML("beforeend", template(data));
        const selector =
            "." +
            data.title.replace(/ /g, "").replace(/\./g, "").replace(/\d+/g, "");
        const imagesContainer = dataContainer.querySelector(selector);
        data.images.forEach((image) =>
            imagesContainer.insertAdjacentHTML(
                "beforeend",
                imgTemplate(image, data.title)
            )
        );
        if (isSlider && data.images.length > 1) {
            const sliderSelector = selector + "Container";
            Slider({
                selector: sliderSelector,
                buttons: true,
                paggination: false,
                draggable: true,
            });
        }
    }
}
