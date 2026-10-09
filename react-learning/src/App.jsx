import { useState } from "react";

function App() {
  const [studentName, setName] = useState('');

  function nameChange(event){
    setName(event.target.value);
  }

  return (
    <div>
      <form onSubmit={submit}></form>
      <h1>Input Data</h1>
      <input type="text" value={studentName} onChange={nameChange} />      
      <p>Name:{studentName}</p>
      <br />
      <br />
    </div>
  );
}

export default App;