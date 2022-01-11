import { ContentStyled } from "./Content.styled"




const Content = ({children}) => {
    return(
        <ContentStyled>
             {children}
        </ContentStyled>
    )
}

export default Content