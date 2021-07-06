function capitalizeStr(str) {
  return str
    .split('')
    .map((v, i) => (i === 0 ? v.toUpperCase() : v))
    .join('');
}

export default capitalizeStr;
