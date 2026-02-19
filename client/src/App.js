import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";
import Andn from "./components/Andn";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BookNow from "./pages/Booking";
import Details from "./components/Details";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="andn" element={<Andn/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book-now"  element={<BookNow/>}/>
   

        <Route path="/experiences" element={<Experiences/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    </BrowserRouter>
   


  );
}

export default App;
