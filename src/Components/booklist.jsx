import { useState,useEffect } from "react";
import Navbar from "./Navbar";
import "../Styles/booklist.css"
import { Link } from "react-router-dom";
const Booklist = () => {
    let[books,setBooks]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
        let response=await fetch("http://localhost:4000/books")
        let data=await response.json()
        setBooks(data)
        }
        fetchData()
    })
    let deleteBook=(id,title)=>{
      fetch(`http://localhost:4000/books/${id}`,{
        method:'DELETE'
      })
      alert(`${title} has been deleted permanently`)

    }
    return ( 
        <div className="booklist">
          <Navbar/>
          <div className="books-list">
            {books.map (data=>(
             <div className="book">
                <img src={data.thumbnailUrl} height={300} width={300}alt="" />
                <div className="card-body">
                    <h1>{data.title}</h1>
                   <h3>Pagecount:{data.pageCount}</h3>
                   <p>Written By:{data.authors}</p>
                   <p>Category:{data.categories}</p>
                   <div className="footer">
                    <Link to={`/book-list/${data.id}`} style={{color:"white",backgroundColor:"green",textDecoration:"none",border:"2px solid black",paddingRight:"10px",borderRadius:"5px",fontSize:"15px",paddingLeft:"5px"}}>Read more</Link>
                    <button onClick={()=>deleteBook(data.id,data.title)} style={{color:"white",backgroundColor:"crimson",borderRadius:"5px",border:"2px solid black"}}>Remove</button></div>
                  </div>
                </div>
            ))}
          </div>
          </div>

          );

        
}
 
export default Booklist;