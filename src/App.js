// import AboutMe from "./AboutMe";
// import Homepage from "./Homepage";
// import { Routes,Route, Link } from "react-router-dom";

// import React from "react";
import ReactPlayer from "react-player/youtube";

const App = () => {
  return(
    <div>
      <MyVideo/>
    </div>
  );
};

  const MyVideo = ()=> {
    return(
      <ReactPlayer url ='https://www.youtube.com/watch?v=ysz56PUM-U'/>
    );
  };


export default App;






// // adding images
// import rooftops from  './assets/logo512.png';


// function App(){
//   const randomImageUrl = "https://picsum.photos/400/265";
//   return(
//     <div>
//       <h1>
//         Task: add three images with some styling.
//       </h1>
//       <img 
//       height ={200}
//       src={rooftops}
//       alt="An image of React"></img>

//       <img 
//       height={200}
//       src={require ('./assets/logo512.png')}
//       alt="An image of React"
//       ></img>

//       <img
//       height={200}
//       src={randomImageUrl}
//       alt="Random Image"
//       ></img>

//     </div>
//   )
// }
// export default App;











// Conditional Statements in React

// function App(){
//   const time = new Date();
//   const day = time.toLocaleString("en-us",{weekday:"long"});
//   const morning = time.getHours() >= 6 && time.getHours() <= 12;
//   let dayMessage;
//   if(day.toLocaleLowerCase()=== "monday"){
//     dayMessage = `Happy ${day}`;

//   } else if (day.toLocaleLowerCase()==="tuesday"){
//     dayMessage = `${day}, four days to go`;

//   }else if (day.toLocaleLowerCase()==="wednesday"){
//     dayMessage = `${day}, half way there`;

//   }else if (day.toLocaleLowerCase()==="thurday"){
//     dayMessage = `${day}, start planning the weekend`;

//   }else if (day.toLocaleLowerCase()==="friday"){
//     dayMessage = `Woo - hoo, the weekend is coming`;

//   } else{
//     dayMessage = " Stay calm and keep having fun";
//   }

//   return(
//     <div className="App">
//       <h1>
//         {dayMessage}
//       </h1>
//       {morning? <h2> Have you had breakfast yet </h2> : ''}
//     </div>
//   );

  
// }

// export default App;









// function App (){
//   return(
//     <div className ="App">
//       <nav className="nav">
//         <Link to="/" className="nav-item">Homepage</Link>
//         <Link to="/about-me" className="nav-item">About Me</Link>
//         <Link to="/about-me" className="nav-item">Contact</Link>
//       </nav>
//       <Routes>
//       <Route path="/" element={<Homepage/>}/>
//       <Route path="/about-me" element={<AboutMe/>}/>
//       </Routes>
//     </div>
//   );
// }
// export default App;















// import Card from "./Card";
// import Btn from "./Btn";
// import Child from "./Child";
// import "./App.css";

// import React from "react";
// import Fruits from "./Fruits";
// import FruitsCounter from "./FruitsCounter";

// function App() {
//   const [fruits] = React.useState([
//     {fruitName: 'apple', id: 1},
//     {fruitName: 'apple', id: 2},
//     {fruitName: 'plum', id: 3},
//   ]);

//   return (
//     <div className="App">
//       <h1>Where should the state go?</h1>
//       <Fruits fruits = {fruits}/>
//       <FruitsCounter  fruits ={fruits}/>
//     </div>
//   );
// }

// export default App;


















// function App(){
//   const date = new Date()

//   return(
//     <div>
//       <Child message = {date.toLocaleTimeString()}/>
//     </div>
//   )
// }
// export default App;






// function App() {
//   function handleClick(){
//     let randomNum = Math.floor(Math.random() * 3) + 1;
//     console.log(randomNum);
//     let userInput = prompt('type a number');
//     alert (`Computer number: ${randomNum}, Your guess: ${userInput}`);
//   }
//   return (
//     <div>
//       <h1>Task: add a button and handle a cleck event </h1>
//       <button onClick={handleClick}>Guess the number between 1 and 3 </button>
//       <Btn />
//     </div>
//   );
// }

// export default App;













// function App() {
//   return (
//     <div className="App">
//       <h1>Task: Add three Card elements
//         <Card h2 = "First card's h2" h3 ="First card's h3"/>
//         <Card h2 = "Second card's h2" h3 ="Second card's h3"/>
//         <Card h2 = "Third card's h2" h3 ="Third card's h3"/>
//       </h1>
//     </div>
//   );
// }

// export default App;


















// import Heading from "./Heading";


// function App() {
//   return (
//     <div className="App">
//       <Heading firstName="Kim" />
//       <Heading firstName="Clovis" />
//     </div>
//   );
// }

// export default App;







