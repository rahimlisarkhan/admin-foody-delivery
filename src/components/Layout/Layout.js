import Container from '@mui/material/Container';
import Main from '../Main';
import Header from '../Header';
import Navbar from '../Navbar';
import Content from '../Content'

const Layout = ({ children }) => {

    return (
        <Container maxWidth="xl" >
            <Header />
            <Main>
                <Navbar />
                <Content>
                    {children}
                </Content>
            </Main>
        </Container>
    )
}

export default Layout