import Container from '@mui/material/Container';
import Main from '../Main';
import Header from '../Header';
import Navbar from '../Navbar';
import Content from '../Content'
import { Fragment } from 'react';

const Layout = ({ children }) => {

    return (
        <Fragment>
            <Header />
            <Container maxWidth="xl" >
                <Main>
                    <Navbar />
                    <Content>
                        {children}
                    </Content>
                </Main>
            </Container>
        </Fragment>
    )
}

export default Layout