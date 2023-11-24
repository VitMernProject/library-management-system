import axios from "axios";

const instance = axios.create({
    baseURL: "http://online-lms.up.railway.app",
    headers:{"Content-Type":"application/json",'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',}
})

export default instance;