import React, {useEffect, useState} from 'react';
import styles from '../styles/Dashboard.module.css'

export default function AddDevice(props) {
    function addDevice(){
        //call api add device
        props.getData()
    }

    return (
        <div className={styles.cardadd}>
            <h4>Add device</h4>
            <form action="#" id="deviceform">
                <input
                    type="text"
                    className={styles.formdevice}
                    id="name"
                    name="name"
                    placeholder="Name"
                    required="required"
                />
                <input
                    type="text"
                    className={styles.formdevice}
                    id="ip"
                    name="ip"
                    placeholder="IP"
                    required="required"
                />
                <input
                    type="text"
                    className={styles.formdevice}
                    id="mac"
                    name="mac"
                    placeholder="MAC"
                    required="required"
                />
                <input
                    type="number"
                    className={styles.formdevice}
                    id="power"
                    name="power"
                    placeholder="Power Consumption (kWh)"
                    required="required"
                />
                <div style="text-align: center">
                    <button type="button" className={styles.loginbutton} onClick={addDevice} id="add"><i className="fas fa-plus"/>&nbsp;
                        ADD DEVICE
                    </button>
                </div>
            </form>
            <span className="danger"/>
        </div>
        // <form action="#" id="device-form">
        //     <input
        //         type="text"
        //         id="name"
        //         name="name"
        //         placeholder="Name"
        //         required="required"
        //     />
        //     <input
        //         type="text"
        //         id="ip"
        //         name="ip"
        //         placeholder="IP"
        //         required="required"
        //     />
        //     <input
        //         type="text"
        //         id="mac"
        //         name="mac"
        //         placeholder="MAC"
        //         required="required"
        //     />
        //     <input
        //         type="number"
        //         id="power"
        //         name="power"
        //         placeholder="Power Consumption (kWh)"
        //         required="required"
        //     />
        //     <div style="text-align: center">
        //         <button type="button"  id="add"><i className="fas fa-plus"/>&nbsp;
        //             ADD DEVICE
        //         </button>
        //     </div>
        // </form>
    );
}