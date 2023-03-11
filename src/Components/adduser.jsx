import Navbar from "./Navbar";
import "../Styles/adduser.css";
import { useRef } from "react";
const Add = () => {
    let firstName=useRef(null)
    let lastName=useRef(null)
    let contact=useRef(null)
    let Email=useRef(null)
    let addUser=(e)=>{
        e.preventDefault()
           let data={
            firstName:firstName.current.value,
            lastName:lastName.current.value,
            contact:contact.current.value,
            Email:Email.current.value
        }
        fetch("http://localhost:4000/books",{
            method:'POST', 
            headers:{'content-Type' : 'application/json'},
            body:JSON.stringify(data)
        })
        alert("user added")
    }
     return ( 
        <div className="adduser">
            <Navbar/>
            <div className="user">
                <div className="two">
                    <h1>ADD USERS</h1>
                </div>
                <div className="three">
                    <form action="" onSubmit={addUser}>

                    <center><label htmlFor="name">First name:</label><br /></center>
                    <input ref={firstName} type="text" placeholder="Enter first name" />
                    <br /><br />
                    <center><label htmlFor="name">Last name:</label><br /></center>
                    <input ref={lastName}type="text" placeholder="Enter last name" />
                    <br /><br />
                    <center><label htmlFor="name">Contact:</label><br /></center>
                    <input ref={contact} type="text"  placeholder="Enter contact number" />
                    <br /><br />
                    <center><label htmlFor="name">Email:</label><br /></center>
                    <input ref={Email} type="text"  placeholder="Enter Email" />
                    <br /><br />
    
                    <button type="Sign in">AddUser</button>
                    <button>Delete</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Add;