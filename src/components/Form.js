import { useContext, useEffect } from 'react';
import { HorseContext } from '../providers/HorseProvider';
import { AccurateClock } from './AccurateClock';
import { CompoundCount } from './CompoundCount';
import './Form.css';
import ModeSelect from './ModeSelect';
import { TotalInsanity } from './TotalInsanity';

function Form() {
  const { setOutput } = useContext(HorseContext);

  const clickHandler = (e) => {
    e.preventDefault();
    setOutput();
  };

  useEffect(() => {
    setOutput();
  }, [setOutput]);

  return (
    <>
      <div className="row">
        <ModeSelect />
      </div>
      <div className="row">
        <AccurateClock />
        <TotalInsanity />
        <CompoundCount />
      </div>
      <div className="row button-row">
        <div className="column">
          <button
            className="button"
            type="button"
            id="actuator"
            onClick={clickHandler}
          >
            Generate
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
