import axios from "axios";

const path = "https://api.mercadolibre.com/"

export const getProductsByWords = (words) => {
    const search = "sites/MLA/search?q=" + words;
    const url = path + search;
    return axios.get(url)
}

export const getProductById = (id) => {
    const search = "items?ids=" + id;
    const url = path + search;
    return axios.get(url)
}
export const getProductDescription = (id) => {
    const search = "items?ids=" + id + "/descriptions";
    const url = path + search;
    return axios.get(url)
}

export const getCategories = (idcategory) => {
    const search = "categories/" + idcategory;
    const url = path + search;
    return axios.get(url)
}