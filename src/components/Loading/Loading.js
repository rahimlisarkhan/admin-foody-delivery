import Image from "../Image"
import { LoadingOverlay } from "./Loading.styled"
import loading from '../../image/loading/loading.gif'


export const Loading = () => {

    return(
        <LoadingOverlay>
            <Image radius="100" width="100" height="100" src={loading}/>
        </LoadingOverlay>
    )
}

export default Loading