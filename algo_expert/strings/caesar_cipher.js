// O(n) time, O(n) space
function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let encodedString = "";

  let newKey = key % 26;

  for (let char of string) {
    encodedString += encode(char, newKey);
  }

  return encodedString;
}

function encode(char, key) {
  // 	97 -> A and 122 -> Z
  let newCode = key + char.charCodeAt();

  if (newCode > 122) {
    return String.fromCharCode((newCode % 122) + 96)
  } else {
    return String.fromCharCode(newCode);
  }
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