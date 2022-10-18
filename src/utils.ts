function shuffleArray(array: Array<any>) {
  return array.sort(() => Math.random() - 0.5);
}

export {
  shuffleArray,
};
