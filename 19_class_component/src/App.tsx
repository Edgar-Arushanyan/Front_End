import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Counter1 from './components/FuncComponent';


function App() {
  return (
    <div className="App">
      {/*От одительского компонента App передаём набор информации через props дочерним компонентам.
      Передача props возможна только от родителя к ребенку(!) */ }
      <Counter initialValue={0} />
      <Counter initialValue={100} />
      <Counter initialValue={10000} />
      <Counter1 />
      
      
    </div>
  );
}

export default App;
