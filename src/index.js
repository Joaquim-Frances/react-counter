
import ReactDOM from 'react-dom';
import CounterApp  from './CounterApp';
//import PrimeraApp from './PrimeraApp'
import './index.css';


const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp value = { value } /> , divRoot);
// ReactDOM.render( <PrimeraApp saludo="Hola, soy Krilin!" /> , divRoot);