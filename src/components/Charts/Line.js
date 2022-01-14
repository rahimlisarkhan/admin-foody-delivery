import { ChartStyled } from "./Charts.styled"

export const ChartLine = ({ total = 350 }) => {

    const option = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar","Apr","May"]
            }
        },
        series: [
            {
                name: "series-1",
                data: [140, 80,25,320,total]
            }
        ]
    }

    return (
        <ChartStyled
            type="line"
            options={option.options}
            series={option.series}
            labels={option.labels}
        />
    )
}