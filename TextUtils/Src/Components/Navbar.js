import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = (Props) => {
    
    return (<>
           <nav className={`navbar navbar-expand-lg navbar-${Props.mode} bg-${Props.mode}`}>
 <Link className="navbar-brand" to="/">{Props.title}</Link>
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>

 <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul className="navbar-nav mr-auto">
     <li className="nav-item active">
       <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
     </li>
     <li className="nav-item">
       <Link className="nav-link" to="/About">{Props.aboutTitle}</Link>
     </li>
     
     <li className="nav-item">
       <a className="nav-link" href="/">Contact</a>
     </li>
   </ul>
   <div className={`form-check form-switch text-${Props.mode==='light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" onClick={Props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
   <div>
   {/* <form className="d-flex">
   <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> 
     &nbsp;                                 
      <button type="button" class="btn btn-success">Search</button>
    
   </form> */}
   
  </div>
   </div>
</nav>
    </>);
};

export default Navbar;
