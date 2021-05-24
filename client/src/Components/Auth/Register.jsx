import React,{useContext, useState} from 'react'
import {AlertContext} from '../../Context/Alert/AlertContext'
export const Register = () => {

      const {setAlert}=useContext(AlertContext)
    const[user, setUser]=useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const {name,email,password,confirmPassword}=user


const onChange=(e) =>{
  setUser({...user,[e.target.name]: e.target.value})  
}

const onSubmit=(e) =>{
    e.preventDefault();
    console.log(user);
  if(name === '' || email === '' || password === ''){
           setAlert('Please enter all fields', 'danger')
  }
  else if(password !== confirmPassword){
    alert("Please type correct password")
}else{
    console.log("user Registered");
} 
}
    return (
        <div className="form-container">
            <h1>User Registration</h1>
            <form onSubmit={onSubmit}>
                <div className="from-group">
                   <label htmlFor="name">Name</label>
                   <input type="text" name="name"  placeholder="Name" value={name} onChange={onChange} />
                </div>

                <div className="from-group">
                   <label htmlFor="email">Email</label>
                   <input type="email" name="email"  placeholder="Email" value={email} onChange={onChange} />
                </div>

                <div className="from-group">
                   <label htmlFor="password">Password</label>
                   <input type="password" name="password"  placeholder="Password" value={password} onChange={onChange}  minLength="6"/>
                </div>

                <div className="from-group">
                   <label htmlFor="confirmPassword">Confirm Passowrd</label>
                   <input type="password" name="confirmPassword"  placeholder="Confirm Password" value={confirmPassword} onChange={onChange} minLength="6"/>
                </div>
                <input type="submit"  value="Register" className="btn btn-primary btn-block"/>
            </form>
        </div>
    )
}
