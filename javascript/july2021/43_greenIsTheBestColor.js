// Challenge link: https://www.codewars.com/kata/57e6bcbd684e570c6700021c

function yellowBeGone(colorNameOrCode) {
  let updatedColor = colorNameOrCode;
  if(colorNameOrCode[0] === '#' ) {
    const redHex = colorNameOrCode.substring(1,3);
    const greenHex = colorNameOrCode.substring(3,5);
    const blueHex = colorNameOrCode.substring(5);
    const red = parseInt(redHex, 16);
    const green = parseInt(greenHex, 16);
    const blue = parseInt(blueHex, 16);
    
    if(red > blue && green > blue) {
      const newGreen = red > green ? redHex : greenHex;
      const newBlue = red > green ? greenHex : redHex;
      const newRed = blueHex;
      updatedColor = '#' + newRed + newGreen + newBlue;
    }
  } else {
    const getRidofThatYellow = { gold: 'ForestGreen', khaki: 'LimeGreen', lemonchiffon: 'PaleGreen',
      lightgoldenrodyellow: 'SpringGreen', lightyellow: 'MintCream', palegoldenrod: 'LightGreen',
      yellow: 'Lime' };
    updatedColor = getRidofThatYellow[colorNameOrCode.toLowerCase()] || colorNameOrCode;
  }
 
  return updatedColor;
}
