import { DashboardCardStyled,NotFoundTitle } from "./DashboardCard.styled"
import CardTitle from "../../../components/Typograph"
import { useTranslation } from "react-i18next"


export const DashboardCard = ({col,title,children}) => {
    let {t} = useTranslation()
    return(
        <DashboardCardStyled col={col}>
            <CardTitle font="20" color="gray">
                {title}
            </CardTitle >
            {!children ? 
            <NotFoundTitle font="14" color="gray">
                {t("no risk")}
            </NotFoundTitle> 
            : children}
        </DashboardCardStyled>
    )
}