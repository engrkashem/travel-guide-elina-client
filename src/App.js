import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import About from './Pages/About/About/About';
import SignIn from './Pages/Authentications/SignIn/SignIn';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import SignUp from './Pages/Authentications/SignUp/SignUp';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Checkout from './Pages/Home/Checkout/Checkout';
import RequiredAuth from './Pages/Authentications/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <Checkout />
          </RequiredAuth>
        }></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
