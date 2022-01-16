import { Axios, mock } from "../mocks";
import categoryPage1 from "../mocks/category/category1.json"
import { toast } from 'react-toastify';
import { t } from "i18next";


mock.onGet("/categories").reply(config => {

    switch (config.params?.page) {
        case 1:
            return [200, { message: 'OK', result: categoryPage1 }]
        default:
            return [200, { message: 'OK', result: categoryPage1 }]
    }


});

mock.onDelete(/\/categories\/delete\/\d+/).reply(config => {

    return [204, { message: 'OK', result: true }]
});

export const getCategories = async (page) => {

    let config = {
        params: page ? { page: +page } : null,
    }

    try {
        const res = await Axios.get("/categories", config)
        return res
    } catch ({ message }) {
        toast.error(message)
    }
}

export const removeCategories = async (id) => {

    try {
        const res = await Axios.delete(`/categories/delete/${id}`)
        toast.success(t("success_message"))

        return res
    } catch ({ message }) {
        toast.error(message)
    }
}