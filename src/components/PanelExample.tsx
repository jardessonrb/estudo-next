import { Component, ElementType, useContext } from 'react';
import { initDB, useIndexedDB } from 'react-indexed-db';
import { ModalContext, ModalContextProvider } from '../contexts/ModalContext';
import { DBConfig } from '../DBConfig';
import styles from '../styles/components/panelExample.module.css';

export default function PanelExample(props: any) {
    const { openModalCart, openModalFavorite } = useContext(ModalContext);
    return (
            <div className={styles.main}>
                <div className={styles.top}>
                    <button type="button" onClick={openModalCart}>
                        Open Modal Cart
                    </button>
                    <button type="button" onClick={openModalFavorite}>
                        Open Modal Favorite
                    </button>
                     
                </div>
                <div className={styles.content}>
                    <div className={styles.menuLateral}>
                        <a className="label-span" href="http://localhost:3000/profile/3">Profile 3</a>
                        <a className="label-span" href="http://localhost:3000/profile/4">Profile 4</a>
                        <a className="label-span" href="http://localhost:3000/profile/5">Profile 5</a>
                    </div>
                    <div className={styles.container}>
                        {props.children}
                    </div>
                </div>
            </div>
    );
}