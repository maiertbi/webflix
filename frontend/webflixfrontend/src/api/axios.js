import axios from 'axios';

const instance = axios.create({
    baseUrl: 'http://localhost:3000'
    //headers: { 'custom-header': 'some value' } 
})
export default instance;