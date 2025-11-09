function whatCentury(year){
const god = parseInt(year, 10);
const vek = Math.ceil(god / 100);
let okonchanie = 'th';
const a = vek % 100;
const b = vek % 10;
if (a < 11 || a > 13) {
  if (b === 1) {
    okonchanie = 'st';} 
else if (b === 2) {
      okonchanie = 'nd';}
else if (b === 3) {
      okonchanie = 'rd';}
}
  return vek + okonchanie;
}
