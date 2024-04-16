import { Link } from 'react-router-dom';
import './Button.css';


// Define a React functional component named Button
// This component takes props 'text' and 'to'
function Button({ text, to }) {
  return (
    <>
        <Link to={to}>
            <button className='heroButtons'>{text}</button>
        </Link>
    </>
  );
}


export default Button;
 