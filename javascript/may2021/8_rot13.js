// Challenge link: https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

function rot13(message) {
  //   Latin alphabet = codes 65-90, 97-122 or /([A-Z])/g
  return message.replace(/([A-Za-z])/g, (value) => {
    const charCode = value.charCodeAt();
    let newCharCode = value.charCodeAt() + 13;
    if (newCharCode > 122 || (charCode < 91 && newCharCode > 90)) {
      newCharCode -= 26;
    }
    return String.fromCharCode(newCharCode);
  });
}


console.log("Rot13")
  console.log("Input: test, \n grfg -> ", rot13("test"), "\n");
  console.log("Input: Test, \n Grfg -> ", rot13("Test"), "\n");       
  console.log("Input: Codewars, \n Pbqrjnef -> ", rot13("Codewars"), "\n");
  console.log(
    "Input: Ruby is cool!, \n Ehol vf pbby! -> ", 
    rot13("Ruby is cool!"), 
    "\n",
  );
  console.log(
    "Input: 10+2 is twelve., \n 10+2 vf gjryir. -> ", 
    rot13("10+2 is twelve."), 
    "\n",
  );
  console.log(
    "Input: abcdefghijklmnopqrstuvwxyz, \n nopqrstuvwxyzabcdefghijklm -> ", 
    rot13("abcdefghijklmnopqrstuvwxyz"), 
    "\n",
  );