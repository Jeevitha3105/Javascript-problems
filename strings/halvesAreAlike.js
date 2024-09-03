//Leetcode - 1704. Determine if String Halves Are Alike

var halvesAreAlike = function (s) {
  s = s.toLowerCase();
  let a = "";
  let b = "";
  for (let i = 0; i < s.length / 2; i++) {
    a += s[i];
  }
  for (let i = s.length / 2; i < s.length; i++) {
    b += s[i];
  }

  //count vowels
  let aCount = 0;
  let bCount = 0;

  let vowels = "aeiou";

  for (let i = 0; i < a.length; i++) {
    if (vowels.includes(a[i].toLowerCase())) {
        aCount += 1;
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (vowels.includes(b[i].toLowerCase())) {
        bCount += 1;
    }
  }

  return aCount === bCount;
};

let s = "textbook";
console.log(halvesAreAlike(s));
