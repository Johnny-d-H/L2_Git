const rl = require('readline');
const iter = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});
function isCircleSorted(arr) {
let kols = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[(i + 1) % arr.length]) {
        kols++;}
}
return kols <= 1;
}
iter.question('Введите числа для заполнения массива через запятую', (input) => {
const arr = input.split(',').map(Number);
const sarr = isCircleSorted(arr);
if (sarr) {
        console.log("Массив отсортировася");} 
else {
        console.log("Массив не отсортировался");}
    iter.close();
});
