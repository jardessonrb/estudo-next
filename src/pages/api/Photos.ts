import axios from 'axios';


class Photos{

    async getPhotos(entitie = "photos", initPage = 0, endPage = 10){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${entitie}?albumId=1`);

        const data = response.data.slice(initPage, endPage);
        console.log("Data: ", data);

        return data;
    }
}


export default new Photos();
  