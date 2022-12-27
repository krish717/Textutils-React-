import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

const App = () => {
       const[mode,setMode] = useState('light');
       const[alert,setAlert] = useState(null);
       const showAlert = (message,type) => {
        setAlert({
           msg:message,
           type : type
        }) 
        setTimeout(() => {
           setAlert(null);
        },3000);
           
       }
       const toggleMode = () => {
             if(mode==='light'){
               setMode('dark');
               document.body.style.backgroundColor = '#042743';
               showAlert("Dark Mode is On", 'Success');
             }else{
               setMode('light');
               document.body.style.backgroundColor = 'white';
               showAlert("Light Mode is On", 'Success');
             }
       }
     return (<>
              <Router>
            <Navbar title="TextUtils" aboutTitle="About Us" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className="container">
            <Routes>
        <Route path="/about" element={<About mode={mode}/>} />
        <Route path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />} />
      </Routes>
            
        </div>
        </Router>   
            
     </>);
};

export default App;


// import React, { useState } from 'react';

// const App = () => {
//     const state = useState();
//     const [fullname,setfullname] = useState({
//         fName : "",
//         lName : "",
//     });
   
//     const inputEvent = (event) => {
//         console.log(event.target.value);
//         const value = event.target.value;
//         const name = event.target.name;

//         setfullname((preValue) => {
//             return {
//                 ...preValue,
//                 [name] : value,
//             }; 
//                 //  if(name==='fName'){
//                 //     return {fName : value,lName:preValue.lName};
//                 //  }else if(name==='lName'){
//                 //     return {fName : preValue.fName,lName:value};
//                 //  }
//         });
        
//     };
   
//     const onSubmit = (event) => {
//         event.preventDefault();
//         alert("form submitted")
//     };
//        return(<>
//        <form onSubmit={onSubmit}>
//         <div>
//             <h1>Hello {fullname.fName}{fullname.lName}</h1>
//              <input type="text" placeholder="Enter Your Name" name='fName' value={fullname.fName} onChange={inputEvent}   /><br></br>
//              <input type="text" placeholder="Enter Your LastName" name='lName' value={fullname.lName} onChange={inputEvent}  /><br></br>
//              <button type='submit'>Click Me</button>
//         </div>
//         </form>
//        </>)
// }

// export default App;




























// // import React, { useState } from 'react';


// // const App = () => {
// //     // const currentTime = new Date().toLocaleTimeString();
// //     const state = useState();
// //     const [currentTime, setCount] = useState(new Date().toLocaleTimeString());
    
// // const Increase = () => {
// //     setCount(new Date().toLocaleTimeString());
// // };

// // setInterval(Increase,1000);
// //     return (
// //     <>
// //     <h1>{currentTime}</h1>
// //     {/* <button onClick={Increase}>Click Me</button> */}
// //     </>
// //     );
// // };

// // export default App;