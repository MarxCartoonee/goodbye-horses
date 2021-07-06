import chunkArray from './chunk-array';
import capitalizeStr from './capitalize-str';

function concatName(nameArr, clock, mode) {
  switch (mode) {
    case 'hlhm':
    default:
      const arr = chunkArray(nameArr, 2);
      return `${arr
        .map((compound) =>
          compound.map((v, i) => (i % 2 === 0 ? capitalizeStr(v) : v)).join('')
        )
        .join(' ')} ${clock}`;

    case 'glhf':
      return `${nameArr.map(capitalizeStr).join(' ')} ${clock}`;
  }
}

export default concatName;
