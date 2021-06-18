import React, { useEffect, useState } from 'react';
import { useRouter} from 'next/router';
import axios from 'axios';
import PanelExample from '../../components/PanelExample';

function Vitrine(data) {
    // const [users, setUsers] = useState([]);

    // const fetchUsers = async () => {
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        
    //     const data = await response.data.slice(0, 5);

    //     setUsers(data);
    // }

    // useEffect(() => {
    //     fetchUsers();
    // }, []);

      

    return (
      <PanelExample>
        <div style={{width: 300, display: 'flex', flexDirection: "column", justifyContent: 'space-around'}}>
            <p>ID: {data.id}</p>
            <p>Titile: {data.title}</p>
            <p>Content: {data.body}</p>
        </div>
      </PanelExample>
    );
}



export async function getServerSideProps(context) {
    const [category, id] = context.query.slug;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/${category}/${id}`);
    console.log("COntext ServerSideProps: ",context);
    const data = res.data;
    
    return {
      props: data, // will be passed to the page component as props
    }
  }
  
  


export default Vitrine;