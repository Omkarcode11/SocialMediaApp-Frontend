import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import Error from "./pages/error/Error";
import SignIn from "./pages/signIn/signIn";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Profile from "./pages/profile/Profile";
import Footer from "./components/footer/Footer";
import Trending from "./components/trending/Trending";
import Friends from "./components/friends/Friends";


function App() {
 

  console.log(window.location.href!=`http://localhost:5173/signin`)
  return (
    <div>
        <BrowserRouter>
      <div>
        {window.location.href!=`http://localhost:5173/signup` && window.location.href!=`http://localhost:5173/signin` ? 
        <Header/>
        : ""}
      </div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile/>}/>
          <Route path="*" element={<Error />} />
          <Route path="/trendingTags" element={<Trending />} />
          <Route path="/friends" element={<Friends/>} />
        </Routes>
        <div className='footer-section'>
      <Footer />
     </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
