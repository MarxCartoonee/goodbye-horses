import { useContext } from 'react';
import { HorseContext } from '../providers/HorseProvider';
import './Output.css';

function Output() {
  const { output } = useContext(HorseContext);

  return (
    <div className="column">
      <textarea id="output" rows="1" readOnly value={output}></textarea>
    </div>
  );
}

export default Output;
