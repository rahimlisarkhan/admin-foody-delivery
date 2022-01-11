import Container from '@mui/material/Container';
import Main from '../Main';
import Header from '../Header';
import Navbar from '../Navbar';


const Layout = ({children}) => {

    return(
        <Container maxWidth="xl" >
            <Header />
            <Main>
            <Navbar/>
                {children}
            </Main>
        </Container>
    )
} 

export default Layout