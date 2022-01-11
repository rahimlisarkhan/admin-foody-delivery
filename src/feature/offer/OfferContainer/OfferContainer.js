import { Fragment,useState } from "react"
import { useTranslation } from "react-i18next";
import ContentHeader from "../../../components/ContentHeader"
import Button from '../../../components/Button'
import Drawer from '../../../components/Drawer'
import OfferTable from "../OfferTable";



export const OfferContainer = () => {
    let [open, setOpen] = useState(false);
    const { t } = useTranslation('translation', { keyPrefix: 'menu' });
    const translate = useTranslation();
  

    const handleClick = () => {
        setOpen(true)
    }
    return(
        <Fragment>
            <ContentHeader title={t('offers')}>
            <Button onClick={handleClick}>{translate.t('add offer')}</Button>
                <Drawer rotate="right" isOpen={open} setIsOpen={setOpen}>
                    <h1>Add Offer </h1>
                </Drawer>
            </ContentHeader>
            <OfferTable/>
        </Fragment>
    )
}
