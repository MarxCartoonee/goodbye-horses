import clocks from '../data/clocks';

function getClock() {
  const d = new Date();
  const hours = d.getHours();
  const adjustedHours = hours % 12;
  d.setHours(adjustedHours);
  const minutes = d.getMinutes();
  const adjustedMinutes = minutes < 30 ? 0 : 30;
  d.setMinutes(adjustedMinutes);
  const timeStr = d.toTimeString().slice(0, 5);
  const clock = clocks[timeStr];
  return clock;
}

export default getClock;
