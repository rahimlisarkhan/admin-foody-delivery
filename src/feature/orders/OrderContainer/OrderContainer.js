import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import ContentHeader from "../../../components/ContentHeader";
import OrderTable from "../OrderTable";


export const OrderContainer = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'menu' });

    return(
        <Fragment>
            <ContentHeader title={t('orders')}/>
            <OrderTable/>
        </Fragment>

    )
}