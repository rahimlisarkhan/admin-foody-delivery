import Image from "../Image";
import image404 from "../../image/404.png";
import { ErrorContentStyled } from "./ErrorContent.styled";
import Button from "../Button"
import { withRouter } from "react-router-dom";

export const ErrorContent = withRouter(({ history: { goBack } }) => {
    return (
        <ErrorContentStyled>
            <Image width="700" src={image404} alt="404" />
            <Button width="300px" onClick={() => goBack()}>
               Go Back
            </Button>
        </ErrorContentStyled>
    )
})