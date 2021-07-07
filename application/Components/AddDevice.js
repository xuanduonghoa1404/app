import React, {useEffect, useState} from 'react';
import styles from '../styles/Dashboard.module.css'

export default function AddDevice() {
    return (
        <div className={styles.card-add}>
            <h4>Add device</h4>
            <form action="#" id="device-form">
                <input
                    type="text"
                    className={styles.form-device}
                    id="name"
                    name="name"
                    placeholder="Name"
                    required="required"
                />
                <input
                    type="text"
                    className={styles.form-device}
                    id="ip"
                    name="ip"
                    placeholder="IP"
                    required="required"
                />
                <input
                    type="text"
                    className={styles.form-device}
                    id="mac"
                    name="mac"
                    placeholder="MAC"
                    required="required"
                />
                <input
                    type="number"
                    className={styles.form-device}
                    id="power"
                    name="power"
                    placeholder="Power Consumption (kWh)"
                    required="required"
                />
                <div style="text-align: center">
                    <button type="button" className={styles.login-button} id="add"><i className="fas fa-plus"/>&nbsp;
                        ADD DEVICE
                    </button>
                </div>
            </form>
            <span className="danger"/>
        </div>
    );
}