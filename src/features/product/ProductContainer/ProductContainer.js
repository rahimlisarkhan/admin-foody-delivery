import { Fragment, useEffect } from "react"
import { useTranslation } from "react-i18next";
import ContentHeader from "../../../components/ContentHeader"
import { ProductsList } from "./ProductContainer.styled";
import ProductCard from "../ProductCard"
import Paginations from "../../../components/Pagination";
import { getProducts } from "../../../services/Products"
import { useDispatch, useSelector } from "react-redux";
import { fillProducts, isLoading } from "../../../store/slices/product/productSlice";
import SkeletonCard from '../../../components/Skeletons/SkeletonCard';
import TypographyText from "../../../components/Typograph";


export const ProductContainer = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'menu' });
    const stateProducts = useSelector(state => state.product.products)
    const loading = useSelector(state => state.product.loading)
    const dispatch = useDispatch()
    const pagesCount = 3

    useEffect(() => {
        getfillData()
    }, [])

    
    const getfillData = async () => {
        if (stateProducts) {
            return
        }

        dispatch(fillProducts(null))
        dispatch(isLoading(true))

        const res = await getProducts(localStorage.getItem("page") || null)

        if (res) {
            let { data: { result: { products } } } = res
            dispatch(fillProducts(products))
        }
        dispatch(isLoading(false))

    }

    const handlePages = async (count) => {
        dispatch(fillProducts(null))
        dispatch(isLoading(true))

        const res = await getProducts(count)
        if (res) {
            let { data: { result: { products } } } = res
            dispatch(fillProducts(products))
        }
        dispatch(isLoading(false))

    }


    return (
        <Fragment>
            <ContentHeader title={t('products')} />
            <ProductsList>
                {(loading ? Array.from(new Array(5)) : stateProducts)?.map((item, index) => (
                    item ? <ProductCard key={index} item={item} /> : <SkeletonCard width="192" key={index} />
                ))}
                {!loading && !stateProducts && <TypographyText font="45" color="gray">No Product</TypographyText>}
            </ProductsList>
            <Paginations count={pagesCount} onPages={handlePages} />
        </Fragment>
    )
}
