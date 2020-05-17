import ApiKey from '../config/api_key';
import axios from 'axios';

function newsList(){
    return new Promise((resolve,reject)=>{
        axios.get(ApiKey.book_base_url+'/top-headlines?' +'country=in&' +'apiKey='+ApiKey.book_api_key).then((response)=>{
            resolve(response);
        }).catch((error)=>{
            reject(error)
        })
    })
}

export default{
    newsList
}