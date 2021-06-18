import React, { useState } from 'react';
import styles from '../styles/components/InputHiddenPassword.module.css';
export default function InputHiddenPassword(){
    const [typeInput, setTypeInput] = useState("text");
    const [Img, setImg] = useState('eye');
    function mude(){
        var t = typeInput === 'text' ? 'password' : 'text';
        var i = Img === 'eye-barra' ? 'eye' : 'eye-barra';

        setTypeInput(t);
        setImg(i);
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputarea}>
                <input type={typeInput} className={styles.input} placeholder="digite sua senha"/>
                <button className={styles.icon} onClick={mude}>
                    <img className={styles.img} src={`./${Img}.png`} alt="imagem"/>
                </button>
            </div>
        </div>
    );
}