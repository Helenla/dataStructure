//javascript计算前1!+2!+...+n!的阶乘和
function A(n){
    var str=[],num;
    for(var i=0;i<n;i++){
        str[i]=i+1
    }
    B(str)
    console.log(eval(str.join('+'))) //求和
}
function B(str){
    var s=0;
    for(var i=1;i<str.length;i++){
        str[i]=str[i]*str[i-1]
    }
    console.log(str)
    return str;
}
A(5)