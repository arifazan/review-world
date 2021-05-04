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

const checkValue = (
  <h1>{compare(user)}</h1>
);

function App() {
  return (
    <div className="">
      <header className="">

      </header>
      <body>
          {checkValue}
      </body>
    </div>
  );
}

export default App;
