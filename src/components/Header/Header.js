import logo from '../../image/icon/logo-white.svg'
import avatar from '../../image/icon/user-admin.svg'
import { HeaderStyled, AdminContent, SubTitle } from "./Header.styled"
import Image from "../Image"
import Button from '../Button'
import { useTranslation } from 'react-i18next'
import Dropwdown from '../Dropdown'
import Drawer from '../Drawer'
import { useEffect, useState } from 'react'
import { ROUTE } from '../../util/route'
import { Link } from 'react-router-dom'
import { Form } from '../Form/Form'
import { FORM } from '../../util/form'


const Header = () => {
    const { t } = useTranslation();
    let [open, setOpen] = useState(false);
    const options = [{id:"001",name:"Mc Donald's"},{id:"002",name:"Papa John's"},{id:"003",name:'Burger King'}];

    useEffect(()=>{
        // console.log("isledi");
        
        return ()=>{
            // console.log("Cixis eledi");
        }
        
    },[])

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <HeaderStyled>
            <Link to={ROUTE.MAIN.PANEL.HREF}>
                <Image width="92" height="32" src={logo} />
            </Link>
            <AdminContent>
                <Button onClick={handleClick}>{t('add product')}</Button>
                <Drawer rotate="right" isOpen={open} setIsOpen={handleClick}>
                    <Form form={FORM.PRODUCTS} 
                          selectOptions={options} 
                          setIsClose={handleClick}/>
                </Drawer>
                <Dropwdown />
                <Image width="40" height="40" src={avatar} />
                <SubTitle>{t('admin')}</SubTitle>
            </AdminContent>
        </HeaderStyled>
    )
}

export default Header