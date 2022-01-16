import { Axios, mock } from "../mocks";
import order from "../mocks/order/order1.json"
import { toast } from 'react-toastify';
import { t } from "i18next";


mock.onGet("/orders").reply(config => {

    switch (config.params?.page) {
        case 1:
            return [200, { message: 'OK', result: order }]
        default:
            return [200, { message: 'OK', result: order }]
    }


});

mock.onDelete(/\/orders\/delete\/\d+/).reply(config => {

    return [204, { message: 'OK', result: true }]
});

export const getOrders = async (page) => {

    let config = {
        params: page ? { page: +page } : null,
    }

    try {
        const res = await Axios.get("/orders", config)
        return res
    } catch ({ message }) {
        toast.error(message)
    }
}

export const removeOrders = async (id) => {

    try {
        const res = await Axios.delete(`/orders/delete/${id}`)
        toast.success(t("success_message"))

        return res
    } catch ({ message }) {
        toast.error(message)
    }
}