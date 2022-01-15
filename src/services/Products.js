import { Axios, mock } from "../mocks";
import productsNextPage1 from "../mocks/product/product.json"
import productsNextPage2 from "../mocks/product/productPage2.json"
import productsNextPage3 from "../mocks/product/productPage3.json"
import { toast } from 'react-toastify';




mock.onGet("/products").reply(config => {
    console.log(config.params);

    switch (config.params?.page) {
        case 1:
            return [200, { message: 'OK', result: productsNextPage1 }]
        case 2:
            return [200, { message: 'OK', result: productsNextPage2 }]
        case 3:
            return [200, { message: 'OK', result: productsNextPage3 }]
        default:
            return [200, { message: 'OK', result: productsNextPage1 }]
    }


});

mock.onDelete(/\/products\/delete\/\d+/).reply(config => {

    return [204, { message: 'OK', result: true }]
});


export const getProducts = async (page) => {


    let config = {
        params: page ? { page: +page } : null,
    }

    try {
        const res = await Axios.get("/products", config)
        console.log(res.data.result);
        return res
    } catch ({ message }) {
        toast.error(message)
    }
}



export const removeProduct = async (id) => {
    try {
        const res = await Axios.delete(`/products/delete/${id}`)
        toast.success("Successfully removed")

        return res
    } catch ({ message }) {
        toast.error(message)
    }
}