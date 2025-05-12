import React, { useState, useEffect, useRef } from 'react';

import axios from 'axios';

const RegisterUser=()=>{
    const[user,setUser]= useState([]);
    const[form,setForm]=useState({username:'',password:''});
    
    const handleChange =e=>{
        setForm({...form,[e.target.name]:e.target.value});
    }

    const handleSubmit=()=>{
        axios.post('http://localhost:5000/api/users/register',form)
        .then(res=>{
            setUser([...user,res.data]);
            setForm({username:'',password:''});
        })
    };

    return(
        <div>
            <input name="username" onChange={handleChange} value={form.username} placeholder="Enter username"/>
            <input name="password" onChange={handleChange} value={form.password} placeholder="Enter the password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};
export default RegisterUser;