function bubbleSort(str){
    var len=str.length,temp;
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            if(str[j]>str[j+1]){
                temp=str[j]
                str[j]=str[j+1]
                str[j+1]=temp
            }
        }
    }
    console.log(str)
}
var str=[];
function count(){
    var i=100,s;
    while(i>0){
        s=Math.floor(Math.random()*100)
        str.push(s)
        i--
    }
    console.log(str)
    return str
}
count()
var start=new Date().getTime();
bubbleSort(str)
var end=new Date().getTime();
var elapsed=end-start;
console.log('消耗的毫秒数：'+elapsed+' 毫秒')