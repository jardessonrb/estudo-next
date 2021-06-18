import React from 'react';
import { useRouter} from 'next/router';
import axios from 'axios';
import { Donts, CircleLoading, LineDotsLoading } from '../../components/animation';
import PanelExample from '../../components/PanelExample';
import { ModalContextProvider } from '../../contexts/ModalContext';

interface userProps{
  id: number;
  name: string;
  username: string;
}

function Profile({ user }){

  const router = useRouter();

  if(router.isFallback){
    return (
      <PanelExample>
        <CircleLoading />
      </PanelExample>
    );
  } 

  return(
    <PanelExample>
      <ModalContextProvider>  
        <div>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.username}</p>
        </div>
      </ModalContextProvider>
    </PanelExample>
  );
}

export async function getStaticProps(context){
  const idg = context.params.id;
  console.log("context id: ", context);
  // const response = await axios.get('https://jsonplaceholder.typicode.com/users', 
  // {params: {id: context.params.id}});
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${idg}`);
  
  const {id, name, username } = await response.data;
  const user = {id, name, username};

  //Isso aqui foi para simular uma nrequisição a API
  // await new Promise((res) => setTimeout(res, 4000))

  // console.log("User getStatic Props: ", user);
  return {
    //Vamos usar aqui ISR 
    props: {user, revalidate: 5}
  };
}


export async function getStaticPaths(){
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
  
  const users = await response.data.slice(0, 2);
  
  const paths = users.map((user) => {
    return {params: {id: String(user.id)}};
  })


  console.log("Paths id:", paths);
  return {
    paths,
    fallback: true,
  };

}

export default Profile;