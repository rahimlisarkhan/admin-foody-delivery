import { Fragment } from "react"
import { useTranslation } from "react-i18next";
import ContentHeader from "../../../components/ContentHeader"
import { ProductsList } from "./ProductContainer.styled";
import ProductCard from "../ProductCard"
import Paginations from "../../../components/Pagination";


export const ProductContainer = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'menu' });

    return(
        <Fragment>
            <ContentHeader title={t('products')}/>
            <ProductsList>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </ProductsList>
            <Paginations/>
        </Fragment>
    )
}
