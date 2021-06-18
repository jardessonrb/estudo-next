import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import styles from '../styles/components/modalcart.module.css';
import PanelExample from './PanelExample';

export default function ModalCart(){
    const { closeModalCart } = useContext(ModalContext);
    return(
        <div className={styles.container}>
           <button type="button" onClick={closeModalCart}>
               Close Modal Cart
           </button>
        </div>
    );
}