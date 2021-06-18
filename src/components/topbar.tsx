import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import styles from '../styles/components/topbar.module.css';

export default function TopBar(){
const { openModalCart, openModalFavorite } = useContext(ModalContext);
    return(
        <div className={styles.container}>
            <button type="button" onClick={openModalCart}>
                Open Modal Cart
            </button>
            <button type="button" onClick={openModalFavorite}>
                Open Modal Favorite
            </button>
        </div>        
    );
}