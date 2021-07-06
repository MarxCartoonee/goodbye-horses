import { useContext } from 'react';
import { HorseContext } from '../providers/HorseProvider';

function TotalInsanity() {
  const { totalInsanity, setTotalInsanity } = useContext(HorseContext);

  const totalInsanityHandler = (e) => {
    e.preventDefault();
    setTotalInsanity(e.target.checked);
  };

  return (
    <div className="column">
      <label htmlFor="total-insanity">Absolute insanity?</label>
      <input
        type="checkbox"
        id="total-insanity"
        value={totalInsanity}
        onInput={totalInsanityHandler}
      />
    </div>
  );
}

export { TotalInsanity };
