module.exports = (req) => {
  // split request on new line, destructure firstSentence/index 0. 
  // 📝 The example http provided has lines which do not end in \r. If it did, I would include it in this split. 
  const [firstSentence] = req.split('\n');

  // split firstSentence, destructure out method/index 0
  const [method] = firstSentence.split(' ');

  // return method
  return method;
};

