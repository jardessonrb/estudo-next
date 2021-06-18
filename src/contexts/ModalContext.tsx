import { createContext, ReactNode, useState } from 'react';
import ModalCart from '../components/modalCart';
import ModalFavorite from '../components/modalFavorite';

interface ModalContextData{
    openModalCart: () => void;
    closeModalCart: () => void;
    openModalFavorite: () => void;
    closeModalFavorite: () => void;
}


interface ChildrenProps{
    children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextData);

export function ModalContextProvider({children}: ChildrenProps){
    const [isActiveModalCart, setIsActiveModalCart] = useState(false);
    const [isActiveModalFavorite, setIsActiveModalFavorite] = useState(false);

    function openModalCart(){
        setIsActiveModalCart(true);
        console.log("open modal Cart", isActiveModalCart);
    }
    
    function closeModalCart() {
        setIsActiveModalCart(false);
        console.log("close modal Cart");
    }

    function openModalFavorite(){
        setIsActiveModalFavorite(true);
        console.log("open modal Favorite", isActiveModalCart);
    }
    
    function closeModalFavorite() {
        setIsActiveModalFavorite(false);
        console.log("close modal Favorite");
    }


    return(
        <ModalContext.Provider
            value={{
                openModalCart,
                closeModalCart,
                openModalFavorite,
                closeModalFavorite
            }}
        >
            {children}

            {isActiveModalCart && <ModalCart />}
            {isActiveModalFavorite && <ModalFavorite />}
        </ModalContext.Provider>
    );
}