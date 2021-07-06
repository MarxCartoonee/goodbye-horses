import { useContext } from 'react';
import { HorseContext } from '../providers/HorseProvider';
import minLengths from '../data/min-lengths';

function CompoundCount() {
  const { mode, totalInsanity, compoundCount, setCompoundCount } =
    useContext(HorseContext);

  const compoundCountHandler = (e) => {
    e.preventDefault();
    setCompoundCount(Math.max(Number(e.target.value), minLengths[mode]));
  };

  return (
    <>
      {totalInsanity && (
        <div className="column">
          <label htmlFor="compound-count">No. of compounds</label>
          <input
            type="number"
            id="compound-count"
            value={compoundCount}
            onInput={compoundCountHandler}
          />
        </div>
      )}
    </>
  );
}

export { CompoundCount };
