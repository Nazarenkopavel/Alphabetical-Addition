let alp = "abcdefghijklmnopqrstuvwxyz";
let a = "b";
if (a.length === 0) {
  console.log("z");
} else if (alp.indexOf(a) != -1) {
  console.log(alp.charAt(alp.indexOf(a) + 1));
}

/*
if (alp.indexOf(a) != -1) {
  console.log(alp.charAt(alp.indexOf(a) + 1))
} 
*/
