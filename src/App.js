import './App.css';
import Login from './Components/Login';
import Admin from './Components/admin';
import Booklist from './Components/booklist';
import Addbook from './Components/Addbook';
import Adduser from './Components/adduser';
import ReadBook from './Components/ReadBook';
import Userlist from './Components/userlist';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path="/"/>
        <Route element={<Admin/>} path="/admin"/>
        <Route element={<Booklist/>} path="/book-list"/>
        <Route element={<Addbook/>} path="/add-books"/>
        <Route element={<Adduser/>} path="/add-user"/>
        <Route element={<Userlist/>} path="/user-list"/>
        <Route element={<ReadBook/>} path="/book-list/:id"/>
        
        </Routes>
    </BrowserRouter>

      
    </div>
  );
}

export default App;
