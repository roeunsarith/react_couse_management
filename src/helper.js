import axios from "axios"
export const config = {
    base_url : "http://localhost:8080/"
   
}

export const fetchData =(url,method="POST",data)=>{
    return axios({
        url : config.base_url+url,
        method : method,
        data : data
    }).then(res=>{
        return res.data
        }).catch(err=>{
        return err.msg
    })
}