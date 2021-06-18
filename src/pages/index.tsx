import React from 'react';
import Photo from '../components/photo';
import TopBar from '../components/topbar';
import { ModalContextProvider } from '../contexts/ModalContext';
import styles from '../styles/pages/styleHome.module.css';
import Photos from './api/Photos';


interface contextApi{
  id: number;
}

interface PhotoProps{
  id: number;
  title: string;
  url: string;
}


export default function Home({ response }) {
  return (
    <ModalContextProvider>
      <div className={styles.container}>
        <div className={styles.contentHeader}>
            <TopBar />
        </div>
        <div className={styles.contentBody}>
          {response.map((photo: PhotoProps) => (
            <Photo key={photo.id} data={photo} />
            ))}
        </div>
      </div>
    </ModalContextProvider>
  );
}


export async function getStaticProps() {
  const initPage = 0, endPage = 10;
  const response = await Photos.getPhotos("photos" , initPage, endPage);

  // console.log("Response: ", response);

  return {
    props: {response}, // will be passed to the page component as props
  }
}



//https://jsonplaceholder.typicode.com/photos?albumId=1