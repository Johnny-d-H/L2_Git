function hasTwoCubeSums(n) {
const pari = [];
for (let a = 1; a ** 3 < n; a++) {
    for (let b = a + 1; a ** 3 + b ** 3 <= n; b++) {
      if (a ** 3 + b ** 3 === n) {
        pari.push([a, b]);}}}
for (let i = 0; i < pari.length; i++) {
  for (let j = i + 1; j < pari.length; j++) {
    const [a1, b1] = pari[i];
    const [a2, b2] = pari[j];
    const all = new Set([a1, b1, a2, b2]);
    if (all.size === 4) {
console.log(`найденые пары кубов для числв ${n}:${a1} и ${b1} = ${a2} и ${b2}`);
return true;}}}
return false;
}
