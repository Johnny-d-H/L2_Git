function expandedForm(num) {
return num.toString().split('')
.map((digit,i,arr)=>{const zero =arr.length-i-1;
return digit !=='0'?digit+'0'.repeat(zero):null;})
.filter(Boolean).join(' + ');
}
