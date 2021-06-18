import React from 'react';
import styles from '../styles/pages/menu.module.css';

export default function Menu(){

    return(
        <div className={styles.containerMenu}>
            <div className={styles.topMenu}>
                <div className={styles.containerLogo}>
                    <img src="./logo_smile.png" alt="logo"/>
                </div>
                <div className={styles.containerInput}>
                    <div className="inputarea">
                        <input type="text" className={styles.inputSearch} placeholder="Digite sua busca"/>
                        <button className={styles.button} onClick={() => alert("Merda")}>
                            <img src="./search.svg" alt="icon"/>
                        </button>
                    </div>
                </div>
                <div className={styles.containerLogin}>
                    <img src="./search.svg" alt="icon"/>
                    <img src="./search.svg" alt="icon"/>
                    <img src="./search.svg" alt="icon"/>                    
                </div>
            </div>
            <div className={styles.lineOptions}>
                <a href="#">categoria x</a>
                <a href="#">categoria x</a>
                <a href="#">categoria x</a>
                <a href="#">categoria x</a>
                <a href="#">categoria x</a>
                <a href="#">categoria x</a>
                <a href="#">categoria x</a>
            </div>
        </div>
    );
}