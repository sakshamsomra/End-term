import axios from "axios";


const URL = 'http://localhost:3003/users';


export const addUser = async (data) => {
    try{
        return await axios.post(URL, data);
    } catch (error) {
        console.log('Error while calling addUser api', error.message);
    }    
}

export const getUsers = async () => {
    try{

        return await axios.get(URL);


    } catch (error) {
        console.log('Error while calling getUsers api', error.message);
    }
}

export const getUser = async (data) => {
    try{

        return await axios.get(`${URL}/${data}`);


    } catch (error) {
        console.log('Error while calling getUser api', error.message);
    }
}

export const editUser = async (data, id) => {

    try{

        return await axios.put(`${URL}/${id}`, data);

    } catch (error) {
        console.log('Error while calling editUser api', error.message);
    }

}

export const delUser = async (id) => {
    try{

        return await axios.delete(`${URL}/${id}`);

    } catch (error) {
        console.log('Error while calling deleteapi ', error.message);
    }
}