import React, {useState} from 'react';
import styles from '../styles/Navigator.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {faCog, faHistory, faHome} from "@fortawesome/free-solid-svg-icons"; // import the icons you need
export default function Navigator(props) {
    return (
        <div className="wrapper">
            <div className={styles.sidebar}>
                <div className={styles.bg_shadow}/>
                <div className={styles.sidebar__inner}>
                    <div className={styles.close}>
                        <i className="fas fa-times"/>
                    </div>
                    <div className={styles.profile_info && styles.info}>
                        <div className={styles.profile_img}>
                            <i className="fas fa-user-circle"/>
                        </div>
                        <div className={styles.profile_data}>
                            <p className={styles.name}>Welcome John</p>
                        </div>
                    </div>
                    <div className={styles.profile_info && styles.device}>
                        <div className={styles.profile_data}>
                            <p className={styles.name}><i className="fas fa-laptop-house"/>&nbsp;Device Manager</p>
                        </div>
                    </div>
                    <ul className={styles.siderbar_menu}>
                        <li><a href="Dashboard"><FontAwesomeIcon icon={faHome}/>&nbsp;Dashboard</a></li>
                        <li><a className={styles.active} href="Log"><FontAwesomeIcon icon={faHistory}/>&nbsp;Logs</a>
                        </li>
                        <li><a href="Login"><FontAwesomeIcon icon={faCog}/>&nbsp;Setting</a></li>
                    </ul>

                </div>
            </div>
            <div className="main_container">
                <div className="top_navbar">
                    <div className="hamburger">
                        <div className="hamburger__inner">
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                    <ul className="menu">
                    </ul>
                    <ul className="right_bar">
                        <li><i className="fas fa-user-circle"></i></li>
                        <li>
                            <p className="name">Welcome John</p>
                        </li>
                    </ul>
                </div>
                <div className="container">

                </div>
            </div>
        </div>
    );
}