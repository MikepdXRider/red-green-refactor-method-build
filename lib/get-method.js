module.exports = (req) => {
  // split req string into an array of lines/sentences
  // 📝 The example http provided has lines which do not end in \r. If it did, I would include it in this split. 
  const sentenceArr = req.split('\n');

  // grab the first line/sentence from the new sentence array.
  const firstSentence = sentenceArr[0];

  // split line string into an array of words.
  const wordArr = firstSentence.split(' ');

  // return the first index of the words array.
  return wordArr[0];
};

