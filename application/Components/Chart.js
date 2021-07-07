import React, {useEffect, useState} from 'react';
import {Doughnut} from 'react-chartjs-2';
import fetch from 'isomorphic-unfetch'

function Chart(props) {
    const [xValues, setXValues] = useState([]);
    const [yValues, setYValues] = useState([]);
    const [chartColor, setChartColor] = useState([]);
    const [chartData, setChartData] = useState({});

    const data = {
        labels: xValues,
        datasets: [{
            data: yValues,
            backgroundColor: chartColor,
            hoverBackgroundColor: chartColor
        }]
    };
    const chart = () => {
        setChartData({
            labels: xValues,
            datasets: [{
                data: yValues,
                backgroundColor: chartColor,
                hoverBackgroundColor: chartColor
            }]
        })
    }
    // useEffect(() => {
    //     chart();
    // })
    return (
        <div>
            <h2>{props.name}</h2>
            <Doughnut
                // data={props.data}
                data={data}
                width={50}
                height={50}
            />
        </div>
    );
}

export default Chart