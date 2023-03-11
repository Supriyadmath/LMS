import Navbar from "./Navbar";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import"../Styles/ReadBook.css";

const ReadBook = () => {
    let params = useParams()
    

    let[book,setBook]=useState([])
    useEffect(()=>{
        let fectchdata = async()=>{
            let response = await fetch(`http://localhost:4000/books/${params.id}`)
            let data = await response.json()
            setBook(data)
        }
        fectchdata()
    })
    return (
        <div className="readbook">
            <Navbar/>
        <div className="image">
            <div className="div">
                <img src={book.thumbnailUrl}  alt="" />
                </div>
                <div className="details">
                   <h1>{book.title}</h1>
                   <h2>AUTHOR: {book.authors}</h2>
                   <p>Short Description:{book.shortDescription}</p>
                   <p>Long Description:{book.longDescription}</p>

                </div>
            </div>
            
            
            </div>


      );
}
 
export default ReadBook;