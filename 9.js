function solution(str){
if(str.length%2!=-0){str+='_';}
const res=[];
for(let i=0;i<str.length;i+=2){
res.push(str[i]+str[i+1]);}
return res;
}
