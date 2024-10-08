import {useState, createContext} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import JeuxA from '../jeuxA/jeuxA'
import MathGame from '../JeuxCalcule';
import Pre from '../pronisation';
import SignIn from '../auth/signln';
import SignUp from '../auth/signUp';
import AuthDetails from '../AuthDetails';

import Home from '../Pages/Home';


import {Navbar} from './Navbar'
import AfterLogin from '../AfterLogin';
export const NavContext = createContext();

function Rout() {
  const [showNav, setShowNav] =useState(true);

  return (
    <NavContext.Provider value={{setShowNav}}>
      <Router>
      {showNav && <Navbar />}
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/jeuxMot" element={<JeuxA/>}/>
            <Route path="/jCP" element={<MathGame/>}/>
            <Route path="/mot" element={<Pre/>}/>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/home" element={<AfterLogin/>}/>
            <Route path="/AuthD" element={<AuthDetails/>}/>
        </Routes>
      </Router>
      </NavContext.Provider>
  )
}

export default Rout
