import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Template from './pages/Templates/Template';
import RegisterPage from './pages/RegisterPage';
import ResumeBuilder from './pages/ResumeBuilder';
import ResumeImportance from './pages/ResumeImportance';
import ResumeTutorial from './pages/ResumeTutorial';

import 'macro-css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='wrapper clear'>
      <Routes>
        <Route path='/' element={ <MainPage/> }></Route>
        <Route path='/Home' element={ <MainPage/> }></Route>
        <Route path='/Login' element={ <LoginPage/> }></Route>
        <Route path='/Register' element={ <RegisterPage/> }></Route>
        <Route path='/About-us' element={ <AboutUs/> }></Route>
        <Route path='/Contacts' element={ <Contacts/> }></Route>
        <Route path='/Profile' element={ <Profile/> }></Route>
        <Route path='/Resume' element={ <Template /> } />
        <Route path='/Resume/:id' element={ <Template /> } />
        <Route path='/Resume/Login' element={ <LoginPage/> }></Route>
        <Route path='/Resume/Register' element={ <RegisterPage/> }></Route>
        <Route path='/Resume/Builder' element={ <ResumeBuilder/> }></Route>
        <Route path='/Resume/Importance' element={ <ResumeImportance/> }></Route>
        <Route path='/Resume/Tutorial' element={ <ResumeTutorial/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
