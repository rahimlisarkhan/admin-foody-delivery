import { Fragment,useState } from "react"
import { useTranslation } from "react-i18next";
import ContentHeader from "../../../components/ContentHeader"
import Button from '../../../components/Button'
import Drawer from '../../../components/Drawer'
import CategoryTable from "../CategoryTable";
import { Form } from "../../../components/Form/Form"
import { FORM } from "../../../util/form"





export const CategoryContainer = () => {
    let [open, setOpen] = useState(false);
    const { t } = useTranslation('translation', { keyPrefix: 'menu' });
    const translate = useTranslation();
  
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
            <CategoryTable/>
        </Fragment>
    )
}
