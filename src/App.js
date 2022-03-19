import './App.css';
// import { Navbar } from './components/Navbar/Navbar';
// import { Footer } from './components/Footer/Footer';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { ProductListPage} from './pages/ProductListPage/ProductListPage';
import { Route, Routes } from 'react-router';
import Main from './Main';
import WishListPage from './pages/WishListPage/WishListPage';
import Mockman from "mockman-js";
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUp';
import CartPage from './pages/CartPage/CartPage';

function App() {
  return (
    <div className="App">
     <Routes >
       <Route element={<Main/>}>
         <Route path='/' element={<LandingPage/>} />
         <Route path="/products" element={<ProductListPage/>} />
         <Route path="/wishlist" element={<WishListPage/>} />
         <Route path="/cart" element={<CartPage/>} />
         <Route path="/login" element={<LoginPage/>} />
         <Route path="/signup" element={<SignUpPage />} />
         <Route path="*" element={<LandingPage/>} />
       </Route>
       <Route path='/mockman' element={<div className='MockAPI'><Mockman/></div>}/>
     </Routes>

{/* 
       <Navbar/>
       <LandingPage/>
        <ProductListPage/>
      <Footer/> */}
    </div>
  );
}

export default App;
