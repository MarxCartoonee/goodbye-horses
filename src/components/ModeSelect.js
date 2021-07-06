import React, { useContext } from 'react';
import modes from '../data/modes';
import titles from '../data/titles';
import { HorseContext } from '../providers/HorseProvider';

export function ModeSelect() {
  const { mode, setMode } = useContext(HorseContext);

  const modeHandler = (e) => {
    e.preventDefault();
    setMode(e.target.value);
  };

  return (
    <div className="column">
      <label htmlFor="mode-select">Mode</label>
      <select id="mode-select" value={mode} onInput={modeHandler}>
        {modes.map((m) => (
          <option key={m} value={m}>
            {titles[m]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ModeSelect;
