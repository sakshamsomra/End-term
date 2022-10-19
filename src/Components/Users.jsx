import React from "react";

import { useEffect, useState} from "react";

import music from './music2.png';
import play from './play.png'
import { Link, useNavigate } from "react-router-dom";
import Songs from "./Songs";


import { getUsers } from "../service/api";
import { delUser } from "../service/api";


function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        getUsersDetails();

    },[])
    

    const getUsersDetails = async () => {
        let response = await getUsers();
        console.log(response);
        setUsers(response.data);
    }

    const delUserData = async (id) => {
        await delUser(id);
        getUsersDetails();
    }


    return (
        <>
    

            <h1>Users</h1>



            <table class="table" id="usertable">
                <thead>
                    <tr>
                        <th scope="col"><img src={music} alt="" /></th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.length > 0
                        ?
                        users.map((user) =>{
                            return(
                                <tr>
                                    <td>
                                    {user.id}
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.age}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.phone}
                                    </td>
                                    <td>

                                        
                                        <button type="button" class="btn btn-danger" id="user" onClick={() => delUserData(user.id)} >DELETE</button>
                                        <Link to = {`/edit/${user.id}`}> <button type="button" class="btn btn-success" id="user" >EDIT</button></Link>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data available"
                    }
                    
                </tbody>
            </table>

            <div id="block1"> <Link to = "/signup"><button type="button" class="btn btn-outline-primary" id="sign">SIGN UP</button></Link></div>

           



        </>
    )
}

export default Users;