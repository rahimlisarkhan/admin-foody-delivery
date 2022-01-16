import { Fragment,useEffect,useState } from "react"
import { useTranslation } from "react-i18next";
import ContentHeader from "../../../components/ContentHeader"
import Button from '../../../components/Button'
import Drawer from '../../../components/Drawer'
import OfferTable from "../OfferTable";
import { Form } from "../../../components/Form/Form"
import { FORM } from "../../../util/form"
import Loading from "../../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getOffers } from "../../../services/Offer";
import { fillOffers } from "../../../store/slices/offer/offerSlice";


export const OfferContainer = () => {
    let [open, setOpen] = useState(false);
    const { t } = useTranslation('translation', { keyPrefix: 'menu' });
    const translate = useTranslation();
    const stateOffers = useSelector(state => state.offer.offers)
    const dispatch = useDispatch()
    
    useEffect(() => {
        getfillData()
    }, [])

    const getfillData = async () => {
        if (stateOffers) {
            return
        }

        const res = await getOffers()
        if (res) {
            let { data: { result: { offers } } } = res
            dispatch(fillOffers(offers))
        }
    }


    const handleSubmit = (form) =>{
        console.log(form);
    }

    const handleClick = () => {
        setOpen(!open)
    }
    return(
        <Fragment>
            <ContentHeader title={t('offers')}>
            <Button onClick={handleClick}>{translate.t('add offer')}</Button>
                <Drawer rotate="right" isOpen={open} setIsOpen={setOpen} >
                    <Form form={FORM.OFFER} 
                          setForm={handleSubmit}
                          setIsClose={handleClick}/>
                </Drawer>
            </ContentHeader>
            {!stateOffers ?<Loading/>:<OfferTable offers={stateOffers}/>}

        </Fragment>
    )
}
