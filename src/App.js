import react from "react";
import Home from "./Components/Home";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Shop from "./Components/Shop";
import Blog from "./Components/Blog";
import Aboutpage from "./Components/Aboutpage";
import Contact from "./Components/Contact";
import Register from "./Components/Register";
import Productdetails from "./Components/Productdetails";
import Category_product from "./Components/Category_product";
import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Viewcart from './Components/Viewcart';
import Myorder from "./Components/Myorder";
import Razorpay from "./Components/Razorpay";
function App() {
  
  //const usr_neme =  localStorage.getItem('username');
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('userid')
  );

  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
  };


  return (
   <>
 
 <BrowserRouter>
 <Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/shop" element={<Shop/>}/>
  <Route path="/blog" element={<Blog/>}/>
  <Route path="/about" element={<Aboutpage/>}/>
  <Route path="/contact" element={<Contact/>}/>

  <Route  path="/category_product/:ctgy_id" element={<Category_product/>}/>
  <Route  path="/viewcart" element={ !isLoggedIn ? ( <Navigate to="/register" />) : (   <Viewcart onLogin={handleLogin} /> ) }/>
  <Route  path="/viewcart" element={ !isLoggedIn ? ( <Viewcart onLogout={handleLogout} />) : (   <Navigate to='/register' /> ) }/>


  <Route  path="/my_order" element={ !isLoggedIn ? ( <Navigate to="/register" />) : (   <Myorder onLogin={handleLogin} /> ) }/>
  <Route  path="/my_order" element={ !isLoggedIn ? ( <Myorder onLogout={handleLogout} />) : (   <Navigate to='/register' /> ) }/>



  <Route
          path="/register"
          element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Register onLogin={handleLogin} />
            )
          }
        />

<Route
          path="/register"
          element={
            isLoggedIn ? <Register onLogout={handleLogout} /> : <Navigate to="/" />
          }
        />





  <Route exact path="/productdetails/:id" element={<Productdetails/>}/>
  
  <Route exact path="/razorpay" element={<Razorpay/>}/>
 </Routes>
 </BrowserRouter>
 
 
   </>
  );
}

export default App;
