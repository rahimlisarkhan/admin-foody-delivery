import { ChartStyled } from "./Charts.styled"

export const ChartBar = ({ userCount, orderCount, productCount }) => {

    const option = {
        series: [{
            name: 'USERS',
            type: 'column',
            data: [23, 11, 22, userCount * 5]
        }, {
            name: 'REGISTER',
            type: 'area',
            data: [44, 55, 41, userCount * 10]
        }, {
            name: 'PRODUCTS',
            type: 'column',
            data: [30, 15, 36, productCount * 10]
        },
        {
            name: 'ORDERS',
            type: 'column',
            data: [30, 25, 36, orderCount * 10]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                stacked: false,
            },
            stroke: {
                width: [0, 2, 5],
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%'
                }
            },

            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: false,
                    shade: 'light',
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: [0, 100, 100, 100]
                }
            },
            labels: [
                '08/01/2021', '09/01/2021', '10/01/2021', '11/01/2021'
            ],
            markers: {
                size: 0
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                title: {
                    text: 'Points',
                },
                min: 0
            },
            // tooltip: {
            //     shared: true,
            //     intersect: false,
            //     y: {
            //         formatter: function (y) {
            //             if (typeof y !== "undefined") {
            //                 return y.toFixed(0) + " points";
            //             }
            //             return y;
            //         }
            //     }
            // }
        },
    }

  return (
      <ChartStyled
          type="bar"
          options={option.options}
          series={option.series}
          labels={option.labels}
      />
  )
}