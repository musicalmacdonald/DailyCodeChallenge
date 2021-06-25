// Challenge link: https://www.codewars.com/kata/586a1af1c66d18ad81000134

const driver = ([fName, mName, lName, bday, bs]) => {
  const birthDate = new Date(bday);
  const start =
    lName.length >= 5
      ? lName.toUpperCase().substring(0, 5)
      : appendNine(lName, 5).substring(0, 5);
  const decade = birthDate.getFullYear().toString()[2];
  const month =
    bs === "F" ? birthDate.getMonth() + 51 : padZero(birthDate.getMonth() + 1);
  const day = padZero(birthDate.getDate());
  const year = birthDate.getFullYear().toString()[3];
  const initials = mName === "" ? appendNine(fName[0]) : fName[0] + mName[0];
  const end = "9AA";

  return start + decade + month + day + year + initials + end;
};

const padZero = (num) => {
  return num > 9 ? num.toString() : "0" + num.toString();
};

const appendNine = (string, rep = 1) => {
  return string.toUpperCase() + "9".repeat(rep);
};