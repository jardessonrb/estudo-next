import { useState, useEffect } from 'react';
import axios from 'axios';


/**
 * Dessa maneira vamos utilizar o SSR, ou seja, Server Side Rendering
 * Que é uma funcionalidade do Next JS que é renderizar do lado do servidor
 * Os dados são tratados do lado do servidor e a pagina ja vem pronta. Isso
 * ajuda muito na questão dos SEO e mecanismos de busca; 
 */
export default function testGetApi({users}) {

    return(
        <div>
            {users.map((user) => (
                <div>{user.name}</div>
            ))}
        </div>
    );
}