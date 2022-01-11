import { Fragment, useState } from "react"
import ContentHeader from "../../../components/ContentHeader"
import SelectLabels from "../../../components/Select"
import { useTranslation } from "react-i18next"
import Button from '../../../components/Button'
import Drawer from '../../../components/Drawer'
import { RestaurantsList } from "./RestaurantsContent.styled"
import Paginations from "../../../components/Pagination";
import RestaurantsCard from "../RestaurantCard"

export const RestaurantsContent = () => {
    let [open, setOpen] = useState(false);
    const { t } = useTranslation('translation', { keyPrefix: 'menu' });
    const translate = useTranslation();

    const handleClick = () => {
        setOpen(true)
    }
    return(
        <Fragment>
            <ContentHeader title={t('restaurants')}>
             <SelectLabels/>
             <Button onClick={handleClick}>{translate.t('add restaurant')}</Button>
                <Drawer rotate="right" isOpen={open} setIsOpen={setOpen}>
                    <h1>Add Restaurants </h1>
                </Drawer>
            </ContentHeader>
            <RestaurantsList>
                <RestaurantsCard/>
                <RestaurantsCard/>
                <RestaurantsCard/>
                <RestaurantsCard/>
                <RestaurantsCard/>
                <RestaurantsCard/>
                <RestaurantsCard/>
                <RestaurantsCard/>
                <RestaurantsCard/>
            </RestaurantsList>
            <Paginations/>

        </Fragment>
    )
}
