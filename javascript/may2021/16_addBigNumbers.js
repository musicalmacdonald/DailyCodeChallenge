// Challenge link: https://www.codewars.com/kata/525f4206b73515bffb000b21/discuss/javascript

// BigInt not avaialable til Node 10.4, kata forces Node 8.1.3
function add(a, b) {
  let result = "";
  let overflow = "";
  const diff = a.length - b.length;

  if (diff > 0) {
    overflow = a.substring(0, diff);
    a = a.substring(diff);
  } else if (diff < 0) {
    overflow = b.substring(0, -diff);
    b = b.substring(-diff);
  }

  let loopOverflow = 0;

  for (let i = b.length - 1; i >= 0; i--) {
    let num = parseInt(a[i]) + parseInt(b[i]) + loopOverflow;
    if (num > 9) {
      loopOverflow = 1;
      num -= 10;
    } else {
      loopOverflow = 0;
    }
    result = num.toString().concat(result);
  }

  if (loopOverflow > 0 && overflow !== "") {
    result = (parseInt(overflow) + loopOverflow).toString().concat(result);
  } else if (loopOverflow > 0) {
    result = loopOverflow.toString().concat(result);
  } else {
    result = overflow.concat(result);
  }
  
  return result;
}

// I didn't like the first solution so I re-wrote using arrays
function add2(a, b) {
  let result = [];
  a = a.split("").reverse();
  b = b.split("").reverse();

  const maxLength = Math.max(a.length, b.length);

  //   use to keep track of the carry digit
  let tens = 0;

  for (let i = 0; i < maxLength; i++) {
    //     if there's not a value for a[i] or b[i] use 0
    const aTemp = parseInt(a[i]) ? parseInt(a[i]) : 0;
    const bTemp = parseInt(b[i]) ? parseInt(b[i]) : 0;

    const ones = (aTemp + bTemp + tens) % 10;
    tens = Math.floor((aTemp + bTemp + tens) / 10);

    //     push to front of array
    result.unshift(ones);
  }

  if (tens > 0) {
    result.unshift(tens);
  }

  return result.join("");
}


console.log("add('1', '1'), '2'", add("1", "1") == "2");
console.log("add('123', '456'), '579'", add("123", "456") == "579");
console.log("add('888', '222'), '1110'", add("888", "222") == "1110");
console.log("add('1372', '69'), '1441'", add("1372", "69") == "1441");
console.log("add('12', '456'), '468'", add("12", "456") == "468");
console.log("add('101', '100'), '201'", add("101", "100") == "201");
console.log("add('63829983432984289347293874', '90938498237058927340892374089') == '91002328220491911630239667963'",
  add("63829983432984289347293874", "90938498237058927340892374089") ==
  "91002328220491911630239667963"
);

