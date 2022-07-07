import { Line, } from 'react-chartjs-2';

const LineChart = ({ labels, datasets }) => {

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: datasets[0].label,
                data: datasets[0].data,
                backgroundColor: "#1FF0FF",
            },
            {
                fill: true,
                label: datasets[1].label,
                data: datasets[1].data,
                backgroundColor: "#B6CDF2",
            },
            {
                fill: true,
                label: datasets[2].label,
                data: datasets[2].data,
                backgroundColor: "#20C6EC",
            },
        ]
    };

    return (
        <Line
            data={data}
        />
    );
}

export default LineChart;