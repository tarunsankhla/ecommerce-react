import './App.css';
// import { Navbar } from './components/Navbar/Navbar';
// import { Footer } from './components/Footer/Footer';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { ProductListPage } from './pages/ProductListPage/ProductListPage';
import { Navigate, Route, Routes } from 'react-router';
import Main from './Main';
import WishListPage from './pages/WishListPage/WishListPage';
import Mockman from "mockman-js";
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUp';
import CartPage from './pages/CartPage/CartPage';
import { useAuth } from "./context/AuthContext";
import { ROUTE_PATH_CartPage, ROUTE_PATH_LandingPage, ROUTE_PATH_LoginPage, ROUTE_PATH_Mockman, ROUTE_PATH_ProductListPage, ROUTE_PATH_SignupPage, ROUTE_PATH_Unknown, ROUTE_PATH_WishListPage } from "./utils/Routes"
function App() {
  const { login, setlogin } = useAuth();
  return (
    <div className="App">
      <Routes >
        <Route element={<Main />}>
          <Route path={ROUTE_PATH_LandingPage} element={<LandingPage />} />
          <Route path={ROUTE_PATH_ProductListPage} element={<ProductListPage />} />
          <Route path={ROUTE_PATH_WishListPage} element={<WishListPage />} />
          <Route path={ROUTE_PATH_CartPage} element={<CartPage />} />
          <Route path={ROUTE_PATH_LoginPage} element={login ? <Navigate to="/" replace /> : <LoginPage />} />
          <Route path={ROUTE_PATH_SignupPage} element={login ? <Navigate to="/" replace /> : <SignUpPage />} />
          <Route path={ROUTE_PATH_Unknown} element={<LandingPage />} />
        </Route>
        <Route path={ROUTE_PATH_Mockman} element={<div className='MockAPI'><Mockman /></div>} />
      </Routes>
    </div>
  );
}

export default App;
