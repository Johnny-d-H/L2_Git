function primeFactors(n){
let res='';
let a=2;
while(n>1){
let count=0;
while(n%a===0){
count++;
n/=a;}
if(count>0){
res+=count===1?`(${a})`:`(${a}**${count})`;}
a++;}
return res;
}
