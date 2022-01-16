import { Axios, mock } from "../mocks";
import offer1 from "../mocks/offer/offer1.json"
import { toast } from 'react-toastify';
import { t } from "i18next";


mock.onGet("/offers").reply(config => {

    switch (config.params?.page) {
        case 1:
            return [200, { message: 'OK', result: offer1 }]
        default:
            return [200, { message: 'OK', result: offer1 }]
    }


});

mock.onDelete(/\/offers\/delete\/\d+/).reply(config => {

    return [204, { message: 'OK', result: true }]
});

export const getOffers = async (page) => {

    let config = {
        params: page ? { page: +page } : null,
    }

    try {
        const res = await Axios.get("/offers", config)
        return res
    } catch ({ message }) {
        toast.error(message)
    }
}

export const removeOffers = async (id) => {

    try {
        const res = await Axios.delete(`/offers/delete/${id}`)
        toast.success(t("success_message"))

        return res
    } catch ({ message }) {
        toast.error(message)
    }
}