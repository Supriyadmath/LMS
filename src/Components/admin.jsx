import Navbar from "./Navbar";
import '../Styles/admin.css'
const Admin = () => {
    return ( 
        <div className="admin">
            <Navbar/>
            <div className="body">
            <img  height="655px" width="1520px"src="https://www.greenwichlibrary.org/wp-content/uploads/2022/09/Books.jpg" alt="" />
            </div>
            <div className="first">
            <h1 style={{fontWeight:"lighter",fontFamily:"cambria"}}>Where the Crawdads Sing</h1>
            <p>On Friday, March 10 at 7:00 pm, come see the  adaptation of the bestselling novel about a girl raising <br />
                 herself in the marshlands of North Carolina</p>
           </div>
    
           <br />
           <div className="second">
            <div className="img1">
                <img src="https://www.greenwichlibrary.org/wp-content/uploads/2023/02/CafeatGreenwichLibrary-2048x800.jpg" alt="" />
                </div>
                <div className="details">
                <h1 style={{fontWeight:"normal",fontSize:"25px"}}>VISIT</h1>
                    <h2 style={{borderBottom:"1px solid #E086A6",fontWeight:"normal",fontSize:"25px"}}>Café at Greenwich Library</h2>
                    <h4 style={{fontWeight:"normal",fontFamily:"cambria",fontSize:"20px"}}>There’s no need to stroll down the Ave for a meal when you’re at the Library! Visit our lower level to get coffee, drinks, snacks, and lunch options, locally sourced from favorites like Happiness Is and Shearwater Coffee.</h4>
                    </div>
            </div>
            <div className="third">
                <div className="img2">
                <img src="https://www.greenwichlibrary.org/wp-content/uploads/2016/04/Pattern-BG-Main.svg" alt="" />
                </div>
                <div className="details1">
                    <h1 style={{fontSize:"25px"}}>March Events</h1>
                    <p style={{fontSize:"25px"}}>Join us for a full slate of programming and events at the Greenwich Libraries! These printable one-page Library calendars are fridge-ready.</p>
                    
                </div>
            </div>
            <div className="fourth">
                <div className="division">
                <div className="div1">
                    <h1 style={{color:"#303030",fontWeight:"lighter",fontFamily:"cambria",borderBottom:"1.5px solid #019875",fontSize:"25px"}}>Tax Help</h1>
                    <h4 style={{color:"#303030",fontWeight:"lighter",fontFamily:"cambria",fontSize:"18px"}}>On Saturday, March 11 from 9:00 am – 2:00 pm, drop in to get free help with your taxes from the AARP <br />
                        Foundation.</h4>
                        <button>Learn More</button>
                        </div>

                        <div className="div2">
                            <h1 style={{color:"#303030",fontWeight:"lighter",fontFamily:"cambria",borderBottom:"1.5px solid #019875",fontSize:"25px"}} >Sea Glass Frames</h1>
                            <h4 style={{color:"#303030",fontWeight:"lighter",fontFamily:"cambria",fontSize:"18px"}}>On Saturday, March 11 at 10:30 am at Cos Cob Library,<br /> join us to create fun and breezy sea glass frames!</h4>
                            <button>Register here</button>
                        </div>
                        </div>
                        <div className="division1">

                        <div className="div3">
                            <h1 style={{color:"#303030",fontWeight:"lighter",fontFamily:"cambria",borderBottom:"1.5px solid #019875",fontSize:"25px"}}>Protect Yourself Online</h1>
                            <h4 style={{color:"#303030",fontWeight:"lighter",fontFamily:"cambria",fontSize:"18px"}}>On Wednesday, March 15 at 3:00 pm, find out the ten <br /> vital practices to protect your personal information and finances.</h4>
                            <button>Mark Your Calendar</button>
                        </div>
                        <div className="div4">
                            <h1 style={{color:"#303030",fontWeight:"lighter",fontFamily:"cambria",borderBottom:"1.5px solid #019875",fontSize:"25px"}}>Adopt-a-Shelf</h1>
                            <h4 style={{color:"#303030",fontWeight:"lighter",fontFamily:"cambria",fontSize:"18px"}}>On Tuesday, March 14 at 10:30 am, volunteer at the <br /> Library by taking care of a shelf twice a month at a time that works for you.</h4>
                            <button>Become a Volunteer</button>
                        </div>
                        

                </div>
            </div>

        </div>
        
     );
}
 
export default Admin;