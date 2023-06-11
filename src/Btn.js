import { useLinkClickHandler } from "react-router-dom";

function Btn(){
  const clickHandler = () => console.log('clicked')
  return(
    <button onClick={clickHandler}>Click Me</button>
  )

}
export default Btn;


// function Btn(){
//   const clickHandler = () => console.log('MouseOut')
//   return(
//     <button onMouseOut={clickHandler}>Click Me</button>
//   )

// }
// export default Btn;