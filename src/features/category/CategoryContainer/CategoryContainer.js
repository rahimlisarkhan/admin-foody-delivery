import { Fragment,useEffect,useState } from "react"
import { useTranslation } from "react-i18next";
import ContentHeader from "../../../components/ContentHeader"
import Button from '../../../components/Button'
import Drawer from '../../../components/Drawer'
import CategoryTable from "../CategoryTable";
import { Form } from "../../../components/Form/Form"
import { FORM } from "../../../util/form"
import Loading from '../../../components/Loading';
import { useDispatch, useSelector } from "react-redux";
import { fillCategories } from "../../../store/slices/category/categorySlice";
import { getCategories } from "../../../services/Category";



export const CategoryContainer = () => {
    let [open, setOpen] = useState(false);
    const { t } = useTranslation('translation', { keyPrefix: 'menu' });
    const translate = useTranslation();
    const stateCategories = useSelector(state => state.category.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        getfillData()
    }, [])

    const getfillData = async () => {
        if (stateCategories) {
            return
        }

        const res = await getCategories()

        if (res) {
            let { data: { result: { categories } } } = res
            dispatch(fillCategories(categories))
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
            <ContentHeader title={t('category')}>
            <Button onClick={handleClick}>{translate.t('add category')}</Button>
                <Drawer rotate="right" isOpen={open} setIsOpen={setOpen}>
                    <Form form={FORM.CATEGORY} 
                          setForm={handleSubmit}
                          setIsClose={handleClick}/>
                </Drawer>
            </ContentHeader>
            {!stateCategories ?<Loading/>:<CategoryTable categories={stateCategories}/>}
        </Fragment>
    )
}
