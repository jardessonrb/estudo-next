import { createContext, useState } from 'react';

interface ModalContextDbData{
    shoppingCartItem: Object[],
    lengthShoppingCart: () => void;
    addItemShoppingCart: () => void;
    removeItemShoppingCart: () => void;
}

export const ModalContextDb = createContext({} as ModalContextDbData);

export default function ModalContextDbProvider(){
    // const testDB =  initDB(DBConfig);
    
    const [shoppingCartItem, setShoppingCartItem] = useState([]);

    function lengthShoppingCart(){ return;}
    
    function addItemShoppingCart(){}

    function removeItemShoppingCart(){}

    return(
        <ModalContextDb.Provider
            value={{
                shoppingCartItem,
                lengthShoppingCart,
                addItemShoppingCart,
                removeItemShoppingCart
            }}
        >

        </ModalContextDb.Provider>
    );
}