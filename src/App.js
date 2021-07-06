import './App.css';
import Form from './components/Form';
import Output from './components/Output';
import Title from './components/Title';
import { HorseProvider } from './providers/HorseProvider';

function App() {
  return (
    <HorseProvider>
      <div className="container">
        <Title />
        <Output />
        <Form />
      </div>
    </HorseProvider>
  );
}

export default App;
