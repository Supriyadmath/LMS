import { useState } from "react";
import { useNavigate } from "react-router-dom";
import"../Styles/Login.css";
const Login = () => {
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
     
    let navigate=useNavigate()

    let submit=(e)=>{
        e.preventDefault()
        if(email=="admin@gmail.com" && password==12345){
           navigate('/admin')
        }else{
            alert('invalid credentials')
        }
    }
    return ( 
        <div className="login">
            <div className="image">
                <img src="https://w0.peakpx.com/wallpaper/595/92/HD-wallpaper-man-made-library-book.jpg" height={400} width={500} alt="" />

            </div>
                
            <div className="login_form">
                <form action="" onSubmit={submit}>
                    <h4>LOGIN</h4>
                    <input  value={email} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="Enter the email address" />
                    <br />
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter the password" />
                    <br />
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}
 
export default Login;