import React, { useState } from 'react'

export const UserLogin = () => {

    // the initial user value will be a object
    const [user, setUser] = useState({
       
        email: '',
        password: '',
        
    })
    //    do destructure 
    const {  email, password} = user
// whenever any chnage will come in the firle the setUser will update
// dynamically It will get the value's name and value
const onChange=(e) =>{
     setUser({...user,[e.target.name]: e.target.value})
};
const onSubmit=(e) =>{
   e.preventDefault();
   console.log("User Login");
}


    return (
        <div className="form-container">
            <h1>User Login</h1>
            <form onSubmit={onSubmit}>
               

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" required name="email" value={email} onChange={onChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" required name="password" value={password} onChange={onChange}  minLength="6"/>
                </div>


                <input type="submit" value="Login" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}
