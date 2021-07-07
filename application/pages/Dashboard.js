import React, {useEffect, useState} from 'react';
import Router from 'next/router';
import TableDevice from "../Components/TableDevice";
import Navigator from "../Components/Navigator";
import fetch from 'isomorphic-unfetch'
import Chart from "../Components/Chart";
import AddDevice from "../Components/AddDevice";

function Dashboard(props) {
    const columns = [
        {id: 1, title: "Name", accessor: "name"},
        {id: 2, title: "MAC", accessor: "mac"},
        {id: 3, title: "IP", accessor: "ip"},
        {id: 4, title: "Created Date", accessor: "date"},
        {id: 5, title: "Power Consumption", accessor: "power"},
    ];
    const [dataDevice, setDataDevice] = useState(props.data);
    // useEffect(() => {
    //     setDataDevice(...props.data);
    // })
    async function addDevice() {
        const res = await fetch('http://localhost:3002/device')
        const data = await res.json();
        setDataDevice(data)
    }

    const component = <>
        <TableDevice columns={columns} data={dataDevice}/>
        {/*<Chart data={dataDevice} name={'Chart'}/>*/}
        <button onClick={addDevice}>hihi
        {/*<AddDevice getData={addDevice}/>*/}
    </button>
        </>
    return (
        <>
            <Navigator component={component} active={'Dashboard'}/>
            {/*<TableDevice columns={columns} data={props.data}/>*/}
            {/*<Chart data={props.data} name={'Chart'}/>*/}
        </>
    );
}

Dashboard.getInitialProps = async function () {
    const res = await fetch('http://localhost:3002/device')
    const data = await res.json()

    return {
        data: data
    }
}
export default Dashboard