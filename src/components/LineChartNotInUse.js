import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line  } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';    // remove in prod as is not needed

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


// chartTitle,         // string or empty -- the title of the chart
// horizontalLabels,   // array: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// verticalLabel,      // 'Distance'
// verticalValues,     // array: values for the vertical point, one for each horizontal label

const LineChart = ( {
        chartTitle,         // string or empty -- the title of the chart
        horizontalLabels,   // array: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        verticalLabel,      // 'Distance'
        verticalValues,     // array: values for the vertical point, one for each horizontal label
    } ) => {

    // remove in production
    if (!verticalValues || !verticalValues.length)
        verticalValues = horizontalLabels.map(() => faker.datatype.number({ min: 0, max: 1000 }));

    console.log("chartTitle", chartTitle)         // string or empty -- the title of the chart
    console.log("horizontalLabels", horizontalLabels)   // array: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log("verticalLabel", verticalLabel)      // 'Distance'
    console.log("verticalValues", verticalValues)     // array: values for the vertical point, one for each horizontal label


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',            // fond more type, like top right maybe
            },
            title: {
                display: !!chartTitle,      // if empty we don't display it
                text: chartTitle,           // title of the chart
            },
        },
    };

    const data = {
        horizontalLabels, // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        datasets: [
            {
                label: verticalLabel,   // 'Distance',
                data: verticalValues,   // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgb(31,240,255)',
            },
            // {
            //     label: 'Time',
            //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            //     backgroundColor: 'rgb(114,245,150)',
            // },
        ],
    };

    return ( <Line options = {options} data = {data} /> );
}

export default LineChart