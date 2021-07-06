import { useContext } from 'react';
import { HorseContext } from '../providers/HorseProvider';

function AccurateClock() {
  const { accurateClock, setAccurateClock } = useContext(HorseContext);

  const accurateClockHandler = (e) => {
    e.preventDefault();
    setAccurateClock(e.target.checked);
  };

  return (
    <div className="column">
      <label htmlFor="accurate-clock">Accurate clock?</label>
      <input
        type="checkbox"
        id="accurate-clock"
        value={accurateClock}
        onInput={accurateClockHandler}
      />
    </div>
  );
}

export { AccurateClock };
