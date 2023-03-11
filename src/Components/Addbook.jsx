import Navbar from "./Navbar";
import "../Styles/add.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Add = () => {
    let [title,setTitle]=useState("")
    let [pageCount,setPageCount]=useState("")
    let [authors,setAuthors]=useState("")
    let [categories,setCategories]=useState("")
    let[description,setDescription]=useState("")
    let [imageUrl,setImageUrl]=useState("")
    
    let navigate=useNavigate()

    let handlesubmit=(e)=>{
        e.preventDefault()
       let data={title,pageCount,authors,categories,description,imageUrl}
         fetch ("http://localhost:4000/books",{
            method:'POST', 
            headers:{'content-Type' : 'application/json'},
            body:JSON.stringify(data)
    })
        // alert("Book added")
        navigate('/add-books')
}
        return ( 
        <div className="addbook">
            <Navbar/>
            <div className="one">
                <div className="two">
                    <h1>Add Your Favorite Books</h1>
                </div>
                <div className="threee">
                    <form action="" onChange={handlesubmit}>

                    <center><label htmlFor="name">Title:</label><br /></center>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter Book Name" />
                    <br /><br />
                    <center><label htmlFor="name">PageCount:</label><br /></center>
                    <input value={pageCount} onChange={(e)=>setPageCount(e.target.value)} type="text" placeholder="Enter PageCount" />
                    <br /><br />
                    <center><label htmlFor="name">Author:</label><br /></center>
                    <input value={authors} onChange={(e)=>setAuthors(e.target.value)} type="text"  placeholder="Enter Author Name" />
                    <br /><br />
                    <center><label htmlFor="name">Category:</label><br /></center>
                    <input value={categories} onChange={(e)=>setCategories(e.target.value)} type="text"  placeholder="Enter Category" />
                    <br /><br />

                    <center><label htmlFor="name">Description:</label><br /></center>
                    <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text"  placeholder="Description" />
                    <br /><br />


                    <center><label htmlFor="name">ImageUrl:</label><br /></center>
                    <input value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} type="text"  placeholder="Enter ImageUrl" />
                    <br /><br />
                    <button type="Sign in">AddBook</button>
                    <button>Delete</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Add;