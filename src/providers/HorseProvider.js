import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react';
import modes from '../data/modes';
import minLengths from '../data/min-lengths';
import compose from '../functions/compose';

const modeReducer = (_, mode) => mode || String(_);
const initialMode = JSON.parse(localStorage.getItem('mode')) || modes[0];
const accurateClockReducer = (_, accurateClock) => accurateClock;
const initialAccurateClock =
  JSON.parse(localStorage.getItem('accurateClock')) || false;
const totalInsanityReducer = (_, totalInsanity) => totalInsanity;
const initialTotalInsanity =
  JSON.parse(localStorage.getItem('totalInsanity')) || false;
const compoundCountReducer = (_, compoundCount) => compoundCount;
const initialCompoundCount =
  JSON.parse(localStorage.getItem('compoundCount')) || minLengths[modes[0]];

const HorseContext = createContext({});

const HorseProvider = ({ updateOutput, children }) => {
  const [mode, setMode] = useReducer(modeReducer, initialMode);
  const [accurateClock, setAccurateClock] = useReducer(
    accurateClockReducer,
    initialAccurateClock
  );
  const [totalInsanity, setTotalInsanity] = useReducer(
    totalInsanityReducer,
    initialTotalInsanity
  );
  const [compoundCount, setCompoundCount] = useReducer(
    compoundCountReducer,
    initialCompoundCount
  );
  const [output, _setOutput] = useState('');

  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(mode));
  }, [mode]);
  useEffect(() => {
    localStorage.setItem('accurateClock', JSON.stringify(accurateClock));
  }, [accurateClock]);
  useEffect(() => {
    localStorage.setItem('totalInsanity', JSON.stringify(totalInsanity));
  }, [totalInsanity]);
  useEffect(() => {
    const count = Math.max(compoundCount, minLengths[mode]);
    if (count !== compoundCount) {
      setCompoundCount(count);
      return;
    }
    localStorage.setItem('compoundCount', JSON.stringify(count));
  }, [compoundCount, mode]);

  const setOutput = useCallback(() => {
    _setOutput(compose(mode, accurateClock, totalInsanity, compoundCount));
  }, [mode, accurateClock, totalInsanity, compoundCount]);

  useEffect(() => {
    setOutput();
  }, [mode, accurateClock, totalInsanity, compoundCount, setOutput]);

  return (
    <HorseContext.Provider
      value={{
        mode,
        setMode,
        accurateClock,
        setAccurateClock,
        totalInsanity,
        setTotalInsanity,
        compoundCount,
        setCompoundCount,
        updateOutput,
        output,
        setOutput,
      }}
    >
      {children}
    </HorseContext.Provider>
  );
};

export { HorseProvider, HorseContext };
