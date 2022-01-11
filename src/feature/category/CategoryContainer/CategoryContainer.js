import { Fragment,useState } from "react"
import { useTranslation } from "react-i18next";
import ContentHeader from "../../../components/ContentHeader"
import Button from '../../../components/Button'
import Drawer from '../../../components/Drawer'
import CategoryTable from "../CategoryTable";





export const CategoryContainer = () => {
    let [open, setOpen] = useState(false);
    const { t } = useTranslation('translation', { keyPrefix: 'menu' });
    const translate = useTranslation();
  

    const handleClick = () => {
        setOpen(true)
    }
    return(
        <Fragment>
            <ContentHeader title={t('category')}>
            <Button onClick={handleClick}>{translate.t('add category')}</Button>
                <Drawer rotate="right" isOpen={open} setIsOpen={setOpen}>
                    <h1>Add Category </h1>
                </Drawer>
            </ContentHeader>
            <CategoryTable/>
        </Fragment>
    )
}
