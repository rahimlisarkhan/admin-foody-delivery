import { DashboardCardStyled } from "./DashboardCard.styled"
import CardTitle from "../../../components/Typograph"


export const DashboardCard = ({col,title}) => {


    return(
        <DashboardCardStyled col={col}>
            <CardTitle font="20" color="gray">
                {title}
            </CardTitle >
        </DashboardCardStyled>
    )
}