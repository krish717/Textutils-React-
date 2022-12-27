import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);





// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from './Card';
// import './index.css';
// import Sdata from './Sdata';
// // function ncard(val){
// //     return ;
// // }
// ReactDOM.render(<>
// <h2 className="heading_style">List of Top 5 Webseries</h2>
// {Sdata.map((val) => {
//     return (<Card 
//     key = {val.id}
//     imgsrc={val.imgscr}
//     title={val.title}
//     sname={val.sname}
//     link={val.link}
//     category={val.category}
//     />); 
// })}
// </>,document.getElementById('root'));










// import React from 'react';
// import ReactDOM from 'react-dom';
// import Heading, {add} from './Heading';
// ReactDOM.render(<>
//                <ol>
               
//                <li>Sum of two Number{add(8,8)}</li>
//                </ol>
// </>,
// document.getElementById('root'));
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Heading from './app';

// ReactDOM.render(<>
//                <app/>
// </>,
// document.getElementById('root')
// );
// MINI project
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Heading from './Heading';

// ReactDOM.render(<><Heading/></>,
// document.getElementById('root')
// );











// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// const currentDate = new Date().toLocaleDateString();
// const currentTime = new Date().toLocaleTimeString();

// .heading{
//     color:red;
//     text-transform: capitalize;
//     font-weight: bold;
//     text-align: center;
//     font-family: 'M PLUS 2';font-size: 22px;
//     margin : 70px 0;
// }
// const heading = {
//     color:"green",
//     textTransform : "capitalize",
//     textAlign:"center",
    
// };
// const name = "krish";
// const link = "mentor.codingninjas.com/doubts/workplace";
// const imglink = "https://cdn.pixabay.com/photo/2016/04/06/20/11/female-1312656__340.png";
// ReactDOM.render(<>
// <h1 style={heading}>My name is {name}</h1>
// <a href={link} target="_blank">
// <img src={imglink} /> 
// </a>
// </>,
// document.getElementById('root'));






// import React from 'react';
// import ReactDOM from 'react-dom';
// // ReactDOM.render(<>
// // <h1>Hello Krish</h1>
// // <h6>Hello Guddu</h6> 
// // <p>Learning React</p>
// // </>, document.getElementById('root'));
// ReactDOM.render(<><h1>KRISH NETFLIX PICK </h1>
//                  <p>List Of Best Series</p>
//                  <ol>
//                     <li>Rocky</li>
//                     <li>Dark</li>
//                     <li>Space</li>
//                     <li>Krish</li>
//                     <li>Don</li>
//                  </ol>
//                  </>, 
// document.getElementById('root'));





