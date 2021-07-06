function chunkArray(array, chunkSize) {
  const R = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    R.push(array.slice(i, i + chunkSize));
  }
  return R;
}

export default chunkArray;
