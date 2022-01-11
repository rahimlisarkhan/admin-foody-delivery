import { MainStyled } from "./Main.styled"



const Main = ({children}) => {
    return(
        <MainStyled>
             {children}
        </MainStyled>
    )
}

export default Main