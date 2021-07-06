function getInsanityLength(mode, compoundCount) {
  switch (mode) {
    case 'hlhm':
      return compoundCount * 2;
    case 'glhf':
    default:
      return compoundCount;
  }
}

export default getInsanityLength;
