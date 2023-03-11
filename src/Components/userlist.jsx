import Navbar from "./Navbar";
import {useState, useEffect} from "react"


const UserList = () => {
    let [user,setUser]=useState([])
    useEffect(() => {
        let fetchData=async() => {
            let response=await fetch(" http://localhost:4000/users")
            let data =await response.json()
            setUser(data)
        }
        fetchData()
    })
    let deleteUser=(id,title)=>{
        fetch(`http://localhost:4000/user/${id}`,{
            method:'DELETE'
        })
        alert(`${title}has been deleted`)
    }
    return ( 
    <div className="userlist">
        <Navbar/>
        <div className="user-list">
            {user.map(data=>(
                <div className="userr">
                    <div className="card-body">
                        <h3> First name:{data.firstName}</h3>
                        <h3>Last name: {data.lastName}</h3>
                        <h3>Email: {data.Email}</h3>
                        <h4>Ph.no: {data.contact}</h4>
                    <div className="footer">
                        <button onClick={()=>deleteUser(data.id,data.title)}>REMOVE</button>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    </div> 
    );
}
 
export default UserList;