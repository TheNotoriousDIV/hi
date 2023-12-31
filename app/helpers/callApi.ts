import axios from "axios";


const callApi = () => {
    const axiosInstance = axios.create({
      baseURL : 'http://localhost5000/api'              
    })
    
    axiosInstance.interceptors.request.use(
       (config) => {
           return config;         
       },
       err => Promise.reject(err)

    )
    axiosInstance.interceptors.response.use(
         res => {
            
            return res;        
         },
         err => Promise.reject(err)

    )
    return axiosInstance;     
}


export default callApi;