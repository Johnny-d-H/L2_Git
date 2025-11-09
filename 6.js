function toWeirdCase(string){
return string.split(' ')
  .map(slovo=>slovo.split('')
  .map((char,index)=>index%2===0?char.toUpperCase():char.toLowerCase())
  .join(''))
  .join(' ');
}
