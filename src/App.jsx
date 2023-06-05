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
import { currentUrl } from "./utils/BaseUrl";
import Search from "./pages/search/Search";


function App() {
 

  return (
    <div>
        <BrowserRouter>
      <div>
        {/* {window.location.href!=`${currentUrl}/signup` || window.location.href!=`${currentUrl}/signin` ? 
        : ""} */}
        <Header/>
      </div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile/>}/>
          <Route path="*" element={<Error />} />
          <Route path="/trendingTags" element={<Trending />} />
          <Route path="/friends" element={<Friends/>} />
          <Route path='/search' element={<Search/>}/>
        </Routes>
        <div className='footer-section'>
      <Footer />
     </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
