function verificarPalindrome(string) {
let reverse = "";
for(let i = string.length - 1; i >= 0; i -= 1){
  reverse = reverse + string[i];
}
if(reverse === string){
  console.log(true)
} else {
  console.log(false)
}
}
verificarPalindrome("arara");