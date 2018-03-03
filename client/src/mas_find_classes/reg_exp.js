
// ********* PARSE REQUIREMENTS ***********

function string_parser(course) {
  if (!course) {
    return [];
  }
  const words_array = course.match(/\b(\w|')+\b/gim);
  const class_and_number = [];

  words_array.forEach((word, i) => {
    if (word === `EECS`) {
      class_and_number.push(word);
      class_and_number.push(words_array[i+1]);
      class_and_number.push(words_array[i+2])
    }
  });

  const classes = [];
  let i = 0;
  class_and_number.forEach(() => {
    if (i + 2 <= class_and_number.length) {
      const s = `${class_and_number[i]} ${class_and_number[i+1]}-${class_and_number[i+2]}`;
      classes.push(s);
      i += 3;
    }
  });

  return classes;
}

module.exports = string_parser;
