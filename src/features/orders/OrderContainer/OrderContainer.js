import { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ContentHeader from "../../../components/ContentHeader";
import OrderTable from "../OrderTable";
import {useDispatch, useSelector} from "react-redux";
import { getOrders } from "../../../services/Order";
import { fillOrders } from "../../../store/slices/order/orderSlice";
import Loading from "../../../components/Loading";

export const OrderContainer = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'menu' });

    const stateOrders = useSelector(state => state.order.orders)
    const dispatch = useDispatch()
    

    useEffect(() => {
        getfillData()
    }, [])

    const getfillData = async () => {
        if (stateOrders) {
            return
        }

        const res = await getOrders()

        if (res) {
            let { data: { result: { orders } } } = res
            dispatch(fillOrders(orders))
        }

    }

    return(
        <Fragment>
            <ContentHeader title={t('orders')}/>
            {!stateOrders ?<Loading/>:<OrderTable orders={stateOrders}/>}
        </Fragment>

    )
}