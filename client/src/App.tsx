import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile';
import Template from './pages/Templates/Template';
import RegisterPage from './pages/RegisterPage';
import ResumeBuilder from './pages/ResumeBuilder';
import 'macro-css';
import { Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <div className='wrapper clear'>
      <Routes>
        <Route path='/' element={ <MainPage/> }></Route>
        <Route path='/Home' element={ <MainPage/> }></Route>
        <Route path='/Login' element={ <LoginPage/> }></Route>
        <Route path='/Register' element={ <RegisterPage/> }></Route>
        <Route path='/About-us' element={ <RegisterPage/> }></Route>
        <Route path='/Contact' element={ <RegisterPage/> }></Route>
        <Route path='/Profile' element={ <Profile/> }></Route>
        <Route path='/Resume' element={ <Template /> } />
        <Route path='/Resume/:id' element={ <Template /> } />
        <Route path='/Resume/Login' element={ <LoginPage/> }></Route>
        <Route path='/Resume/Register' element={ <RegisterPage/> }></Route>
        <Route path='/Resume/Builder' element={ <ResumeBuilder/> }></Route>
        <Route path='/Resume/Importance' element={ <ResumeBuilder/> }></Route>
        <Route path='/Resume/Tutorial' element={ <ResumeBuilder/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
