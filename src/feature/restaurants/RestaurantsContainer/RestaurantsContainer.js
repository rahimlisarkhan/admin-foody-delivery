import { Fragment, useState } from "react"
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

export const RestaurantsContainer = () => {
    let [open, setOpen] = useState(false);
    const { t } = useTranslation('translation', { keyPrefix: 'menu' });
    const translate = useTranslation();

    const options = [{id:"001",name:'Fast Food'},{id:"002",name:'Pizza'},{id:"003",name:'Kebab'}];

    const handleClick = () => {
        setOpen(!open)
    }
    return(
        <Fragment>
            <ContentHeader title={t('restaurants')}>
             <SelectLabels width="200" poper="200" options={options}/>
             <Button onClick={handleClick}>{translate.t('add restaurant')}</Button>
                <Drawer rotate="right" isOpen={open} setIsOpen={setOpen}>
                    <Form form={FORM.RESTAURANT} 
                          selectOptions={options} 
                          setIsClose={handleClick}/>
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
