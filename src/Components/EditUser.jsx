import React, {useState, useEffect} from "react";
import Songs from "./Songs";
import {v4 as uuid} from "uuid";
import { useNavigate, useParams, Link } from "react-router-dom";

import { getUser } from "../service/api";

import { editUser } from "../service/api";





const initialValues = {
  name: '',
  age: '',
  email: '',
  phone:''

}


export default function EditUser() {

  const [user, setUser] = useState(initialValues)

  const {id} = useParams();

  useEffect(() => {
    getUserData();
  },[])

  const getUserData = async () => {
    let response = await getUser(id);
    setUser(response.data);
  }
  
  const onValChange = (e) => {
    
    setUser({...user, [e.target.name] : e.target.value})
    console.log(user);
  }
  
  const addUserDetails = async () => {

     await editUser(user, id);
     

  }

  return (

    <div>

      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label" id="text">Name</label>
          <input type="text" class="form-control" id="validationCustom01" required onChange={(e) => onValChange(e)} name = "name" value={user.name}/>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label" id="text">Age</label>
          <input type="text" class="form-control" id="validationCustom02" required onChange={(e) => onValChange(e)} name ="age" value={user.age}/>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label" id="text">Email</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required onChange={(e) => onValChange(e)} name ="email" value={user.email}/>
            <div class="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
        
        <div class="col-md-3">
          <label for="validationCustom05" class="form-label" id="text">Phone</label>
          <input type="text" class="form-control" id="validationCustom05" required onChange={(e) => onValChange(e)} name ="phone" value={user.phone}/>
          <div class="invalid-feedback">
            Please provide a valid phone number.
          </div>
        </div>
        
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label" id="text">Change file</label>
          <input type="file" class="form-control" id="validationCustom01" required value={''}/>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
  

        

        <div class="col-12">
          <Link to = "/users"><button class="btn btn-primary" type="submit" onClick={() => addUserDetails()} >Edit</button></Link>
          
        </div>
      </form>





    </div>
  )
}