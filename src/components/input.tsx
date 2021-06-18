import styles from '../styles/components/input.module.css';

export default function Input(){

    return(
        <label className={styles.labelc}>
            <input className={styles.inputc} type="password" placeholder=" "/>
            <p className={styles.pc}>Senha</p>
        </label>
    );
}