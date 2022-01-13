import { DashboardList } from "./DashboardContainer.styled"
import DashboardCard from "../DashboardCard"
import { useTranslation } from "react-i18next"

export const DashboardContainer = () => {

    const { t } = useTranslation('translation', { keyPrefix: 'menu' });

    return (
        <DashboardList>
                <DashboardCard title={t("orders")} col={5}/>
                <DashboardCard title={t("orders")} col={6}/>
                <DashboardCard title={t("orders")} col={6}/>
                <DashboardCard title={t("orders")} col={5}/>
        </DashboardList>
    )
}