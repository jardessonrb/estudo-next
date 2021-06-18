import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import styles from '../styles/components/modalcart.module.css';

function ModalFavorite(){
    const { closeModalFavorite } = useContext(ModalContext);
    const [users, setUsers ] = useState([]);
    async function userP(){
        const users = await axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => response);
        setUsers(users.data.slice(3));
    }

    useEffect(() => {
        userP();
    }, []);
    return(
        <div className={styles.container}>
           <button type="button" onClick={closeModalFavorite}>
               Close Modal Favorite
           </button>
           <div>
               {users.map((user) => {
                   <p>{user.name}</p>
               })}
           </div>
        </div>
    );
}


export default ModalFavorite;