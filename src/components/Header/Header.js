import logo from '../../image/icon/logo-white.svg'
import avatar from '../../image/icon/user-admin.svg'
import { HeaderStyled, AdminContent, SubTitle, HeaderContent } from "./Header.styled"
import Image from "../Image"
import Button from '../Button'
import { useTranslation } from 'react-i18next'
import Dropwdown from '../Dropdown'
import Drawer from '../Drawer'
import { useState } from 'react'
import { ROUTE } from '../../util/route'
import { Link } from 'react-router-dom'
import { Form } from '../Form/Form'
import { FORM } from '../../util/form'
import { Container } from '@mui/material'

const Header = () => {
    const { t } = useTranslation();
    let [open, setOpen] = useState(false);
    const options = [{ id: "001", name: "Mc Donald's" }, { id: "002", name: "Papa John's" }, { id: "003", name: 'Burger King' }];


    const handleSubmit = (form) => {
        console.log(form);
    }

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <HeaderStyled>
            <Container maxWidth="xl" >
            <HeaderContent>
                <Link to={ROUTE.MAIN.PANEL.HREF}>
                    <Image width="92" height="32" src={logo} />
                </Link>
                <AdminContent>
                    <Button onClick={handleClick}>{t('add product')}</Button>
                    <Drawer rotate="right" isOpen={open} setIsOpen={handleClick}>
                        <Form form={FORM.PRODUCTS}
                            setForm={handleSubmit}
                            selectOptions={options}
                            setIsClose={handleClick} />
                    </Drawer>
                    <Dropwdown />
                    <Image width="40" height="40" src={avatar} />
                    <SubTitle>{t('admin')}</SubTitle>
                </AdminContent>
            </HeaderContent>
            </Container>

        </HeaderStyled>
    )
}

export default Header