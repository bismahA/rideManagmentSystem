

import axios from 'axios';


const URL = 'http://localhost:3001';


export const addRequest = async (data) => {
    try{
       return await axios.post(`${URL}/add`, data);
    }
    catch(error)
    {
        console.log("eror while calling request data api");

    }
    

}


export const getRequestLog = async() =>
{
    try
    {
        return await axios.get(`${URL}/all`);
    }
    catch(error)
    {
      console.log("error loading request log", error);
    }
}





