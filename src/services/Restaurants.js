import { Axios, mock } from "../mocks";
import restaurantsNextPage1 from "../mocks/restaurant/rest1.json"
import restaurantsNextPage2 from "../mocks/restaurant/rest2.json"
import restaurantsNextPage3 from "../mocks/restaurant/rest3.json"
import { toast } from 'react-toastify';




mock.onGet("/restaurants").reply(config => {
    console.log(config.params);

    switch (config.params?.page) {
        case 1:
            return [200, { message: 'OK', result: restaurantsNextPage1 }]
        case 2:
            return [200, { message: 'OK', result: restaurantsNextPage2 }]
        case 3:
            return [200, { message: 'OK', result: restaurantsNextPage3 }]
        default:
            return [200, { message: 'OK', result: restaurantsNextPage1 }]
    }


});

mock.onDelete(/\/restaurants\/delete\/\d+/).reply(config => {

    return [204, { message: 'OK', result: true }]
});


export const getRestaurants = async (page) => {

    let config = {
        params: page ? { page: +page } : null,
    }

    try {
        const res = await Axios.get("/restaurants", config)
        console.log(res.data.result);
        return res
    } catch ({ message }) {
        toast.error(message)
    }
}



export const removeRestaurants = async (id) => {
    try {
        const res = await Axios.delete(`/restaurants/delete/${id}`)
        toast.success("Successfully removed")

        return res
    } catch ({ message }) {
        toast.error(message)
    }
}