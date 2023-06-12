import AboutMe from "./AboutMe";
import Homepage from "./Homepage";
import { Routes,Route, Link } from "react-router-dom";

function App (){
  return(
    <div className ="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/ about-me" className="nav-item">About Me</Link>
        <Link to="/ about-me" className="nav-item">Contact</Link>
      </nav>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about-me" element={<AboutMe/>}/>
      </Routes>
    </div>
  );
}
export default App;















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







