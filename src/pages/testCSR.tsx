import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';


/**
 * Essa é a maneira que o react em si trabalha, porem não é tão
 * legal para o SEO, e os mecanismos de busca, pois ele renderiza somente depois
 * da pagina esta carregada, ou seja, é um CSR - Client Side Rendering, renderização
 * do lado lado do cliente, ou seja, tudo é feito no navegador.
 */
export default function testGetApi() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        const data = await response.data;

        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return(
        <div>
            {users.map((user) => (
                <div>
                    <Link href="/profile/[id]" as={`/profile/${user.id}`}>
                        <a>{user.name}</a>
                    </Link>
                </div>
            ))}
        </div>
    );
}