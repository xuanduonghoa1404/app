import React, {useState} from 'react';
import Router from 'next/router';
import TableDevice from "../Components/TableDevice";
import TableLog from "../Components/TableLog";
import fetch from "isomorphic-unfetch";
import Navigator from "../Components/Navigator";
function Log(props) {
    const columns = [
        {id: 1, title: "Device ID", accessor: "device_id"},
        {id: 2, title: "Name", accessor: "name"},
        {id: 3, title: "Action", accessor: "action"},
        {id: 4, title: "Date", accessor: "date"},
    ];

    const component = <>
        {/*<Navigator/>*/}
        <TableLog columns={columns} data={props.data}/>
    </>
    return (
        <>
            <Navigator component={component} active={'Log'}/>
        </>
    );
}
Log.getInitialProps = async function() {
    const res = await fetch('http://localhost:3002/log')
    const data = await res.json()
    return {
        data: data
    }
}
export default Log