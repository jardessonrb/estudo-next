import React from 'react';
import styles from '../styles/pages/animation.module.css';


function Donts() {

  return (
    <div className={styles.container}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
    </div>
  );
}

function CircleLoading(){

  return (
    <div className={styles.containerCircleLoading}>
			<div className={styles.circleLoading}></div>
		</div>
  );
}

function LineDotsLoading(){
  return(
    <div className={styles.lineDotsLoadingContainer}>
      <div className={styles.lineDots}></div>
      <div className={styles.lineDots}></div>
      <div className={styles.lineDots}></div>
      <div className={styles.lineDots}></div>
      <div className={styles.lineDots}></div>
    </div>
  );
}




export { Donts, CircleLoading, LineDotsLoading };
