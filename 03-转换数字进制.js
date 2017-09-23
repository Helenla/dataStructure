function stack(){
    this.dataStore=[];
    this.top=0;
    this.push=push;
    this.pop=pop;
    this.peek=peek;
    this.clear=clear;
    this.length=length;
}
function push(element){
    this.dataStore[this.top++]=element;
}
//返回栈顶元素
function peek(){
    return this.dataStore[this.top-1]
}
function pop(){
    return this.dataStore[--this.top]
}
function clear(){
    this.top=0;
}
function length(){
    return this.top
}
function change(num,n){
    var s=new stack();
    do{
        s.push(num%n)
        num=Math.floor(num/n)
    }while(num>0)
    var converted='';
    while(s.length()>0){
        converted+=s.pop()
    }
    return converted;
}




//不用 栈 搭建的数组方法
function change(num,n){
    var s=[]
    do{
        s.push(num%n)
        num=Math.floor(num/n)
    }while(num>0)
    var str=''
    do{
        str+=s.pop()
    }while(s.length>0)
    return str;
}
change(32,2)