import React,{useState} from 'react'

export const Register = () => {
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
    console.log("user Registered");
    console.log(user);
    if(password !== confirmPassword){
        alert("Please type correct password")
    }
}
    return (
        <div className="form-container">
            <h1>User Registration</h1>
            <form onSubmit={onSubmit}>
                <div className="from-group">
                   <label htmlFor="name">Name</label>
                   <input type="text" name="name" required placeholder="Name" value={name} onChange={onChange} />
                </div>

                <div className="from-group">
                   <label htmlFor="email">Email</label>
                   <input type="email" name="email" required placeholder="Email" value={email} onChange={onChange} />
                </div>

                <div className="from-group">
                   <label htmlFor="password">Password</label>
                   <input type="password" name="password" required placeholder="Password" value={password} onChange={onChange}  minLength="6"/>
                </div>

                <div className="from-group">
                   <label htmlFor="confirmPassword">Confirm Passowrd</label>
                   <input type="password" name="confirmPassword" required placeholder="Confirm Password" value={confirmPassword} onChange={onChange} minLength="6"/>
                </div>
                <input type="submit"  value="Register" className="btn btn-primary btn-block"/>
            </form>
        </div>
    )
}
