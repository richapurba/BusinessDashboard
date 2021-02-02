function generateData(count, start, growth) {
	const data = [];
	for (let i = 0; i < count; i++) {
		data.push(Math.floor(start + Math.random() * i * growth));
	}
	return data;
}

export const chartData = [
	{
        name: 'BTC',
        data: generateData(12, 30, 5),
		color: '#00698F',
    },
	{
        name: 'ETX',
        data: generateData(12, 7, 0.3),
		color: '#0096cc',
    },
	{
        name: 'RXL',
        data: generateData(12, 6, 0.5),
		color: '#00B4F5',
    },
	{
        name: 'ETH',
        data: generateData(12, 5, 0.2),
		color: '#47CEFF',
    }
]

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

function format(num){
	return `$$(num) Billion`;
}

export const tableRows = months.map((month, i) => ({
	month,
	BTC: format(chartData[0].data[i]),
	ETX: format(chartData[1].data[i]),
	RXL: format(chartData[2].data[i]),
	ETH: format(chartData[3].data[i])
}))