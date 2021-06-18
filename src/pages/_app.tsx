import React, { useState } from 'react';
import { ModalContextProvider } from '../contexts/ModalContext';
import '../styles/global.css';



function MyApp({ Component, pageProps }) {
  return(
    /*Agora eu posso tirar ele daqui e deixar mais limpo
    E vou manda-lo para a pagina que eu quiser ...*/
    <ModalContextProvider>
      <Component {...pageProps} />
    </ModalContextProvider>
    
  );
}

export default MyApp;