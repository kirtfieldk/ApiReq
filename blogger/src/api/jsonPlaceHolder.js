import axios from 'axios';
//Everytime we code with axios this is the base url
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

})