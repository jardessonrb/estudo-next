import React from 'react';
import { useRouter} from 'next/router';
import TopBar from '../components/topbar';
import { ModalContextProvider } from '../contexts/ModalContext';



export default function Hum() {
  const router = useRouter();
  const { hum } = router.query;

  return (
    <div>
      <ModalContextProvider>
      <TopBar />
      <h1>{`Header - Hum -> params: ${hum}`}</h1>
      </ModalContextProvider>
    </div>
  );
}
