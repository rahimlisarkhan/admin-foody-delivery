import { DashboardList } from "./DashboardContainer.styled"
import DashboardCard from "../DashboardCard"
import { useTranslation } from "react-i18next"
import { ChartDonut } from "../../../components/Charts/Donut";
import { ChartBar } from "../../../components/Charts/Bar";
import { ChartLine } from "../../../components/Charts/Line";
 
export const DashboardContainer = () => {

    const { t } = useTranslation('translation', { keyPrefix: 'menu' });

    return (
        <DashboardList>
            <DashboardCard title={t("products")} col={7}>
                <ChartDonut />
            </DashboardCard>
            <DashboardCard title={t("restaurants")} col={4}>
                <ChartLine />
            </DashboardCard>
            <DashboardCard title={t("offers")} col={4}/>
            <DashboardCard title={t("orders")} col={7}>
                <ChartBar />
            </DashboardCard>
        </DashboardList>
    )
}