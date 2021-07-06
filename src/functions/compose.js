import segments from '../data/segments';
import getClock from './get-clock';
import concatName from './concat-name';
import getRandomNumber from './get-random-number';
import getInsanityLength from './get-insanity-length';
import clocks from '../data/clocks';

function compose(mode, accurateClock, totalInsanity, numberOfSegments) {
  const segs = segments[mode].slice(0);
  const length = totalInsanity
    ? getInsanityLength(mode, numberOfSegments)
    : segs.length;
  const nameArr = [];
  const clockArr = Object.values(clocks);
  const clock = accurateClock
    ? getClock()
    : clockArr[getRandomNumber(0, clockArr.length - 1)];

  let k = 0;
  for (let i = 0; i < length; i++) {
    k = getRandomNumber(0, segs.length - 1);
    nameArr.push(segs[k]);
    if (!totalInsanity) {
      segs.splice(k, 1);
    }
  }

  const name = concatName(nameArr, clock, mode);

  return name;
}

export default compose;
