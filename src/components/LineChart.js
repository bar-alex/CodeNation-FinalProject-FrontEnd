import React from "react";
import { Chart, registerables } from 'chart.js';
import { Line } from "react-chartjs-2";

Chart.register(...registerables);// // import { Chart } from 'react-chartjs-2'


const LineChart = ({horizLabels, vertLabel, vertValues}) => {

    const data = {
        // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        labels: horizLabels,
        datasets: [{
                // label: "First dataset",
                // data: [33, 53, 85, 41, 44, 65],
                label: vertLabel,
                data: vertValues,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            // {
            //     label: "Second dataset",
            //     data: [33, 25, 35, 51, 54, 76],
            //     fill: false,
            //     borderColor: "#742774"
            // }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'chartArea',
            },
            // title: {
            //     display: false,
            //     text: 'Chart.js Line Chart',
            // },
        },
        // animations: {
        //     tension: {
        //         duration: 1000,
        //         easing: 'linear',
        //         from: 1,
        //         to: 0,
        //         loop: true
        //     }
        // },
        scales: {
            y: { // defining min and max so hiding the dataset does not change scale range
                min: 0,
                max: 100
            }
        },
    };

    return (
        // <div>
            <Line options={options} data={data} />
        // </div>
    );
};

export default LineChart;

// please leave these here, they're gonna be useful to customize this later on
// https://react-chartjs-2.js.org/components/line
// https://www.chartjs.org/docs/latest/configuration/legend.html
// https://react-chartjs-2.js.org/examples/line-chart


//-------------------------------------------
// you can add these to app.js to test it out

// this is to test the linechart
// const horizLabels=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Someday"];
// const vertLabel="M";
// const vertValues=[33, 53, 85, 41, 44, 65, 71];

// <div style = { {width:"600px"} }>
// <LineChart 
//   horizLabels={horizLabels}  
//   vertLabel={vertLabel} 
//   vertValues={vertValues} />
// </div>
