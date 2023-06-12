// import Card from "./Card";
import Btn from "./Btn";
import Child from "./Child";
import "./App.css";




function App(){
  const date = new Date()

  return(
    <div>
      <Child message = {date.toLocaleTimeString()}/>
    </div>
  )
}
export default App;






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







