import { URL } from "./variables.js";

export async function fetchData({ urlEnd }) {
    let data;
    let errorMessage;
    try {
        const response = await fetch(`${URL}${urlEnd}`);
        if (!response.ok) throw new Error(response.status);
        const responseData = await response.json();
        data =
            responseData.products?.length > 0
                ? responseData.products
                : responseData;
    } catch (error) {
        errorMessage = `${error}, cant fetch data`;
        return { error: error, data: null, isLoading: false };
    } finally {
        return {
            isLoading: false,
            data,
            error: errorMessage,
        };
    }
}
