import { axiosInstance } from "../../../../app/config/axiosInstance"

export let getAllEmployees =async ({page=1, limit=20,role='', department='', status='active',search=''})=>{

    try {
        let res =await axiosInstance.get(`/employee?page=${page}&limit=${limit}&search=${search}&role=${role}&department=${department}&status=${status}`,
            
        );
        
        return res.data.data;   
       
        
    } catch (error) {
        console.error("Error fetching employees:", error);
    }
}
export let createEmployee = async (data) => {   
     try {
        let res = await axiosInstance.post("/employee/create", data);
        return res.data;
    } catch (error) {
        console.error("Error creating employee:", error);
    }
}

export let updateEmployee = async (empId,data) => {   
    try {
        let res =await axiosInstance.patch(`/employee/update/${empId}`, data)
        return res;
    } catch (error) {
        console.log("error inupdate api",error)
    }
}
