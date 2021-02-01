import React from "react";
import { Card } from "./Card";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
    chart: {
		height: '360px',
        type: 'column',
		style: {
            fontFamily: `'Lora', serif`,
        },
    },
    title: {
        text: 'Revenue by Products'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        min: 0,
		reversedStacks: false,
        title: {
            text: 'Total Profit Percentage'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
		series: {
			borderWidth: 0,
		},
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'BTC',
        data: [5, 3, 4, 7, 2],
		color: '#00698F',
    }, {
        name: 'ETX',
        data: [2, 2, 3, 2, 1],
		color: '#0096cc',
    }, {
        name: 'RXL',
        data: [3, 4, 4, 2, 5],
		color: '#00B4F5',
    }, {
        name: 'ETH',
        data: [3, 4, 4, 2, 5],
		color: '#47CEFF',
    }]
}

export function Chart() {
	return <Card height={400}>
		<HighchartsReact
		highcharts={Highcharts}
		options={options}
		/>
	</Card>
}