let row = 5;

console.log("*");

for (let i = 1; i < row; i++) {
  let text = "";
  for (let k = i; k < row - 1; k++) {
    text += " ";
  }
  for (let j = 1; j <= i + 1; j++) {
    text += "*";
  }
  console.log(text);
}
