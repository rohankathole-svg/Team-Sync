import { axiosInstance } from "../../../../app/config/axiosInstance";

export const createDepartmentApi = async (data)=>{
    try {
        let res =await axiosInstance.post('/departments/create',data);
        return res;
    
    } catch (error) {
        console.log("error in department creation",error);
    }
}

export const getAllDepartmentsApi = async ()=>{
    try {
        let res = await axiosInstance.get('/departments')
        console.log(res);
        return res.data;
    } catch (error) {
         console.log("error in get all departments api",error);
    }

}