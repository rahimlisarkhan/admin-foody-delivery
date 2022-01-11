import logo from '../../image/icon/logo-white.svg'
import avatar from '../../image/icon/user-admin.svg'
import { HeaderStyled, AdminContent, SubTitle } from "./Header.styled"
import Image from "../Image"
import Button from '../Button'
import { useTranslation } from 'react-i18next'
// import Dropwdown from '../Dropdown'
import Drawer from '../Drawer'
import { useEffect, useState } from 'react'

const Header = () => {
    const { t } = useTranslation();
    let [open, setOpen] = useState(false);

    useEffect(()=>{
        // console.log("isledi");
        
        return ()=>{
            // console.log("Cixis eledi");
        }
        
    },[])

    const handleClick = () => {
        setOpen(true)
    }

    return (
        <HeaderStyled>
            <Image width="92" height="32" src={logo} />
            <AdminContent>
                <Button onClick={handleClick}>{t('add product')}</Button>
                <Drawer rotate="right" isOpen={open} setIsOpen={setOpen}>
                    <h1>Add Product</h1>
                </Drawer>
                {/* <Dropwdown /> */}
                <Image width="40" height="40" src={avatar} />
                <SubTitle>{t('admin')}</SubTitle>
            </AdminContent>
        </HeaderStyled>
    )
}

export default Header