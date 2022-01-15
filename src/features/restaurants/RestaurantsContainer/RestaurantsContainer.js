import { Fragment, useEffect, useState } from "react"
import ContentHeader from "../../../components/ContentHeader"
import SelectLabels from "../../../components/Select"
import { useTranslation } from "react-i18next"
import Button from '../../../components/Button'
import Drawer from '../../../components/Drawer'
import { RestaurantsList } from "./RestaurantsContainer.styled"
import Paginations from "../../../components/Pagination";
import RestaurantsCard from "../RestaurantCard"
import { Form } from "../../../components/Form/Form"
import { FORM } from "../../../util/form"
import { useDispatch, useSelector } from "react-redux"
import SkeletonCard from "../../../components/Skeletons/SkeletonCard"
import TypographyText from "../../../components/Typograph"
import { fillRestaurants, filterRestaurant, isLoading } from "../../../store/slices/restaurant/restaurantSlice"
import { getRestaurants } from "../../../services/Restaurants"

export const RestaurantsContainer = () => {
    let [open, setOpen] = useState(false);
    const { t } = useTranslation('translation', { keyPrefix: 'menu' });
    const translate = useTranslation();
    const options = [{ id: "001", name: 'Fast Food' }, { id: "002", name: 'Pizza' }, { id: "003", name: 'Steak' }, { id: "004", name: 'Coffee' }];
    const stateRestaurants = useSelector(state => state.restaurant.restaurants)
    const filterRestaurants = useSelector(state => state.restaurant.filterRestaurants)
    const loading = useSelector(state => state.restaurant.loading)
    const dispatch = useDispatch()
    const pagesCount = 3

    useEffect(() => {
        getfillData()

        return () => {
            dispatch(filterRestaurant(''))
        }
    }, [])

    const getfillData = async () => {
        if (stateRestaurants) {
            return
        }

        dispatch(fillRestaurants(null))
        dispatch(isLoading(true))

        const res = await getRestaurants(localStorage.getItem("page") || null)

        if (res) {
            let { data: { result: { restaurants } } } = res
            dispatch(fillRestaurants(restaurants))
        }
        dispatch(isLoading(false))

    }

    const handleFilter = (key, value) => {
        dispatch(filterRestaurant(value))
    }

    const handleSubmit = (form) => {
        console.log(form);
    }

    const handleClick = () => {
        setOpen(!open)
    }

    const handlePages = async (count) => {
        dispatch(filterRestaurant(''))
        dispatch(fillRestaurants(null))
        dispatch(isLoading(true))

        const res = await getRestaurants(count)
        if (res) {
            let { data: { result: { restaurants } } } = res
            dispatch(fillRestaurants(restaurants))
        }
        dispatch(isLoading(false))

    }

    return (
        <Fragment>
            <ContentHeader title={t('restaurants')}  >
                <SelectLabels width="200" poper="200" setValue={handleFilter} options={options} />
                <Button onClick={handleClick}>{translate.t('add restaurant')}</Button>
                <Drawer rotate="right" isOpen={open} setIsOpen={setOpen}>
                    <Form form={FORM.RESTAURANT}
                        setForm={handleSubmit}
                        selectOptions={options}
                        setIsClose={handleClick} />
                </Drawer>
            </ContentHeader>
            <RestaurantsList>
                {(loading ? Array.from(new Array(5)) : (filterRestaurants.length > 0 ? filterRestaurants : stateRestaurants))?.map((item, index) => (
                    item ? <RestaurantsCard key={index} item={item} /> : <SkeletonCard width="192" key={index} />
                ))}
                {!loading && !stateRestaurants && <TypographyText font="45" color="gray">No Product</TypographyText>}
            </RestaurantsList>
            <Paginations count={pagesCount} onPages={handlePages} />
        </Fragment>
    )
}
