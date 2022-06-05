import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import Main from './Main';
import Mockman from "mockman-js";
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUp';
import { useAuth } from "./context/AuthContext";
import { ROUTE_PATH_CartPage, ROUTE_PATH_LandingPage,ROUTE_PATH_ProductListPage_Search, ROUTE_PATH_LoginPage,ROUTE_PATH_ProductContentPage, ROUTE_PATH_Mockman, ROUTE_PATH_ProductListPage, ROUTE_PATH_SignupPage, ROUTE_PATH_Unknown, ROUTE_PATH_WishListPage, ROUTE_PATH_ProfilePage, ROUTE_PATH_CheckoutPage } from "./utils/Routes"
import NotFoundPage404 from './pages/NotFoundPage404/NotFoundPage404';
import { lazy, Suspense } from 'react';
import Loader from './components/UI/Loader/Loader';


const LandingPage  = lazy(() => import('./pages/LandingPage/LandingPage'));
const ProductListPage  = lazy(() => import('./pages/ProductListPage/ProductListPage'));
const WishListPage  = lazy(() => import('./pages/WishListPage/WishListPage'));
const ProductContentPage  = lazy(() => import('./pages/ProductContentPage/ProductContentPage'));
const ProfilePage  = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const CheckoutPage  = lazy(() => import('./pages/CheckoutPage/CheckoutPage'));
const CartPage  = lazy(() => import('./pages/CartPage/CartPage'));

function App() {
  const { login, setlogin } = useAuth();
  return (
    <div className="App">
      <Routes >
        <Route element={<Main />}>
          <Route path={ROUTE_PATH_LandingPage} element={
             <Suspense fallback={<Loader />}><LandingPage /></Suspense>} />
          <Route path={ROUTE_PATH_ProductListPage} element={
            <Suspense fallback={<Loader />}><ProductListPage /></Suspense>} />
          <Route path={ROUTE_PATH_ProductListPage_Search} element={
            <Suspense fallback={<Loader />}><ProductListPage /></Suspense>} />
          <Route path={ROUTE_PATH_ProductContentPage} element={<Suspense fallback={<Loader />}><ProductContentPage /></Suspense>} />
          <Route path={ROUTE_PATH_WishListPage} element={<Suspense fallback={<Loader />}><WishListPage /></Suspense>} />
          <Route path={ROUTE_PATH_CartPage} element={<Suspense fallback={<Loader />}><CartPage /></Suspense>} />
          <Route path={ROUTE_PATH_CheckoutPage} element={!login ?  <Navigate to="/" replace/> : <Suspense fallback={<Loader />}><CheckoutPage /></Suspense>} />


          <Route path={ROUTE_PATH_LoginPage} element={login ? <Navigate to="/" replace /> : <LoginPage />} />
          <Route path={ROUTE_PATH_SignupPage} element={login ? <Navigate to="/" replace /> : <SignUpPage />} />
          <Route path={ROUTE_PATH_ProfilePage} element={login ?
            <Suspense fallback={<Loader />}><ProfilePage /></Suspense> : <Navigate to={ROUTE_PATH_LoginPage} replace />} />
          <Route path={ROUTE_PATH_SignupPage} element={login ? <Navigate to="/" replace /> : <SignUpPage />} />
         
          <Route path={ROUTE_PATH_Unknown} element={<NotFoundPage404 />} />
        </Route>
        <Route path={ROUTE_PATH_Mockman} element={<div className='MockAPI'><Mockman /></div>} />
      </Routes>
    </div>
  );
} 

export default App;
