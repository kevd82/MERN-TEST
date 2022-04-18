import React, {useState, useEffect,} from "react";
import axios from "axios";


const Reg = (props)=>{

    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState({});


    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const register = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/register",
            user,
            {
                withCredentials: true,
            },)
            .then ((res)=>{
                console.log(res.data);
                setUser({
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
                setConfirmReg("Thanks for registering; you can now log in!",);
            
            setErrors({});
        })
            .catch((err)=>{
            console.log(err);
            setErrors(err.response.data.errors);
        })
        
    }



    return (
        <div>
            <h1>Register</h1>
            <br/>
            {confirmReg ? <h4 style={{ color: "blue" }}>{confirmReg}</h4> : null}
            <br/>
            <form onSubmit={register}>
                <div>
                    <label>Username:  </label>
                    {errors.username ? (
                        <span className="error-text">
                            {errors.username.message}
                        </span>
                    ) : null}
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <br/>
                <div>
                    <label>Email:  </label>
                    {errors.email ? (
                        <span className="error-text">{errors.email.message}</span>
                    ) : null}
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div>
                    <label>Password:  </label>
                    {errors.password ? (
                        <span className="error-text">
                            {errors.password.message}
                        </span>
                    ) : null}
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div>
                    <label>Confirm Password:  </label>
                    {errors.confirmPassword ? (
                        <span className="error-text">
                            {errors.confirmPassword.message}
                        </span>
                    ) : null}
                    <input
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div>
                    <button style={{background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", borderRadius: "12px", padding: "15px 32px", backgroundSize: "100%", margin: "22px"}}>Register!</button>
                </div>
            </form>






        </div>
    )
}
export default Reg;