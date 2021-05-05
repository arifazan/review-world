import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

const helloWorld = "Hello, World!";
const user = 'michael';
const additional = (
  'h4',
  {className: 'additional'},
  'I\'m learning about github on windows too!'
);

function compare(user){
  if(user !== ''){
     return "hello, " + user + "!"; 
  }
  return helloWorld;
}

const simplifiedElements = (
  'h1',
  {className: 'simplifiedElements'},
  'this is a simple element, not that you can see it'
);

const checkValue = (
  <h1>{compare(user)}</h1>
);

const divOpener = (
  'div',
  {className: 'opener'},
  <h2>{simplifiedElements}</h2>
);

//a basic javascript function accepted by React
function function_one(user){
  return <h1>{user} this has the same value as</h1>
}
//this declaration of function is the same as above. still don't know the usage for tho
class function_two  { //extends React.Component <<< this part can be ommited if already imported from other file
  render(){
    return <h1>as this, did you know {user}?</h1>
  }
}

//calling a function using a user defined element *remember use UpperCase Letter
function HiJullie(props){
  return <h1>Hello to you too, {props.name}</h1>;
}
const userDefinedComponent = <HiJullie name="Julie"/>

function App() {
  return (
    <div className="">
      <header className="">

      </header>
      <body>
          {checkValue}
          {divOpener}
          {additional}
          {function_one}
          {function_two}
          {userDefinedComponent}
      </body>
    </div>
  );
}

export default App;
