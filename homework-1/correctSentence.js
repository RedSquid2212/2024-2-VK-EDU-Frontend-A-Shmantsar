/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

export default function correctSentence(text) {
  if (typeof text !== 'string' || text.trim().length === 0) {
    return false;
  }

  const singleSpaceText = text.replace(/_/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
  return singleSpaceText[0].toUpperCase() + singleSpaceText.slice(1) + (singleSpaceText[singleSpaceText.length - 1] !== '.' ? '.' : '');
}
