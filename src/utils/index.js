export const extractStringsEnclosedInBraces = (text) => {
  const allEnclosedStrings = text.match(/{{(.*?)}}/g); // Extracting strings including curly braces {{...}}

  if (allEnclosedStrings) {
    return allEnclosedStrings
      .map((match) => match.slice(2, -2).trim()) // removing curly braces {{}}
      .filter(Boolean) // skipping empty variables
      .map((variable) => variable.replace(/ /gi, '-')); // replacing space with -
  }

  return [];
};
