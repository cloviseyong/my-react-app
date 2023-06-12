import ReactDOM from 'react-dom/client';
// import Homepage from './Homepage';
// import AboutMe from './AboutMe';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter> <App/>
</BrowserRouter>
);