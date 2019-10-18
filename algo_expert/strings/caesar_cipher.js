// O(n) time, O(n) space
function caesarCipherEncryptor(string, key) {
  let newStr = "";
  let newKey = key % 26;

  for (let char of string) {
    newStr += getNewChar(char, newKey);
  }

  return newStr;
}

function getNewChar(char, key) {
  let newKey = char.charCodeAt() + key;

  return newKey > 122
    ? String.fromCharCode(96 + (newKey % 122))
    : String.fromCharCode(newKey);
}



///////
// O(n) time, O(n) space....assuming alphabet array size is fixed
function caesarCipherEncryptor(string, key) {
  let newStr = "";
  let newKey = key % 26;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (let char of string) {
    newStr += (getNewChar(char, newKey, alphabet));
  }

  return newStr;
}

function getNewChar(char, key, alphabet) {
  let newKey = alphabet.indexOf(char) + key;

  return newKey > 25
    ? alphabet[newKey % 26]
    : alphabet[newKey];
}