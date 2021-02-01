import React from "react";
import { Card } from "./Card";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
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