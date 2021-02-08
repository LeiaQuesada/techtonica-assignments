
function stringsplosion(s) {
  let singles = "";
  for (let i = 0; i < s.length; i++) {
    singles += s.substr(0, i+1);
  }
  return singles;
}
console.log(stringsplosion("Does this work now?"));