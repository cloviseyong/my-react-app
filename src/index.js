import React from 'react';
import ReactDOM from 'react-dom/client';


const myFirstElement = <h1> Welcome</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));root.render(myFirstElement);

ReactDOM.createRoot(document.getElementById('root')).render(<p> Welcome to my world</p>);

using JSX parenthesis () to render HTML in React JS
const myelement =(
  <table>
    <tr>
      <td>Name</td>
    </tr>
    <tr>
      <td>Clovis</td>
    </tr>
    <tr>
      <td>Kim</td>
    </tr>
  </table>
);

