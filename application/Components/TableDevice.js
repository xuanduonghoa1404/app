import React, {useState} from 'react';
import styles from '/styles/Table.module.css';

export default function TableDevice(props) {
    const data = props.data;
    const columns = props.columns;

    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
            <tr className={styles.tr}>
                {columns.map((col) => (
                    <th className={styles.th} key={col.id}>{col.title}</th>
                ))}
            </tr>
            </thead>
            <tbody className={styles.tbody}>
            {data.map((user, i) => (
                <tr className={styles.tr} key={i}>
                    {columns.map((col) => (
                        <td className={styles.td} key={col.id}>{user[col.accessor]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}