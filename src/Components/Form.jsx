import React, {useState} from "react";
import Songs from "./Songs";
import {v4 as uuid} from "uuid";
import { Link, useNavigate } from "react-router-dom";

import { addUser } from "../service/api";


const initialValues = {
  name: '',
  age: '',
  email: '',
  phone:'',
  photo:''

}



export default function Form() {

  const [user, setUser] = useState(initialValues)
  
  const onValChange = (e) => {
    
    setUser({...user, [e.target.name] : e.target.value})
    console.log(user);
  }
  
  const addUserDetails = async () => {

    await addUser(user);
  

  }

  return (

    <div>

      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label" id="text">Name</label>
          <input type="text" class="form-control" id="validationCustom01" required onChange={(e) => onValChange(e)} name = "name"/>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label" id="text">Age</label>
          <input type="text" class="form-control" id="validationCustom02" required onChange={(e) => onValChange(e)} name ="age" />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label" id="text">Email</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required onChange={(e) => onValChange(e)} name ="email" />
            <div class="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom03" class="form-label" id="text">City</label>
          <input type="text" class="form-control" id="validationCustom03" required />
          <div class="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label" id="text">State</label>
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">Choose...</option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom05" class="form-label" id="text">Phone</label>
          <input type="text" class="form-control" id="validationCustom05" required onChange={(e) => onValChange(e)} name ="phone"/>
          <div class="invalid-feedback">
            Please provide a valid phone number.
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label" id="text">Choose a file</label>
          <input type="file" class="form-control" id="validationCustom01" required onChange={(e) => onValChange(e)} name = "photo"/>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        
        <div class="col-12">
          <Link to = "/users"><button class="btn btn-primary" type="submit" onClick={() => addUserDetails()} >Submit form</button></Link>
          
        </div>
      </form>



    </div>
  )
}