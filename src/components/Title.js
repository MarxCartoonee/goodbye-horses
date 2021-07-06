import { useContext, useEffect, useState } from 'react';
import titles from '../data/titles';
import { HorseContext } from '../providers/HorseProvider';

function Title() {
  const [title, setTitle] = useState();
  const { mode } = useContext(HorseContext);

  useEffect(() => {
    setTitle(titles[mode]);
  }, [mode]);

  return <h1 id="title">{title}</h1>;
}

export default Title;
