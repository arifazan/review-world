import logo from './logo.svg';
import './App.css';

const helloWorld = "Hello, World!";
const user = 'michael';
function compare(user){
  if(user != ''){
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

function App() {
  return (
    <div className="">
      <header className="">

      </header>
      <body>
          {checkValue}
          {divOpener}
      </body>
    </div>
  );
}

export default App;
