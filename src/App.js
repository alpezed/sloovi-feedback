import './App.css';

import { SlooviFeedback } from 'sloovi-feedback';

function App() {
  return (
    <div className="App">
      <SlooviFeedback projectId="94854yu587454kj">
        <button>Send feedback</button>
      </SlooviFeedback>
    </div>
  );
}

export default App;
