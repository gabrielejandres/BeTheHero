import React from 'react'; // importar o { useState } se forem necessárias mudanças de estado

import './global.css';

import Routes from './routes';

function App() {

  return (
    <Routes />
    );
}

export default App;



  /* CONTADOR UTILIZANDO STATE */
  // const [counter, setCounter] = useState(0);

  // function increment() {
  //   setCounter(counter + 1);
  // }

  // return (
  // <div>
  //   <Header> Contador: { counter } </Header>
  //   <button onClick={increment}> Incrementar </button>
  // </div>
  // );
