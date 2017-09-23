//修改 Queue 类，形成一个 Deque 类。这是一个和队列类似的数据结构，允许从队列两端添加和删除元素，因此也叫双向队列。
function Deque(){
    this.dataStore=[]
    this.enqueue=enqueue
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.length=length
}
//进队
function enqueue(element,state){
    //state==1时尾部添加
    if(state==1)
    this.dataStore.push(element)
    else if(state==2)
    this.dataStore.unshift(element)
}
//出队
function dequeue(state){
    //state==1时尾部删除
    if(state==1)
    return this.dataStore.shift()
    else
    return this.dataStore.pop()
}
//返回队头，不改变原数组
function front(){
    return this.dataStore[0]
}
//返回队尾
function back(){
    return this.dataStore[this.dataStore.length-1]
}
//以字符串形式返回
function toString(){
    var reStr=''
    for(var i=0,len=this.dataStore.length;i<len;i++){
        reStr+=this.dataStore[i]
    }
    return reStr
}
//长度
function length(){
    return this.dataStore.length
}
//数组是否为空
function empty(){
    if(this.dataStore.length=0){
        return true;
    }else{
        return false;
    }
}



// 双向队列
function panduan(huiwen){
    var hui=[],wen=[];
    for(let i=0;i<huiwen.length();i++){
        hui.push(huiwen.dequeue(1))
        wen.push(huiwen.dequeue(2))
    }
    //或者使用hui.toString()方法也可比较数组
   for(let i=0;i<hui.length;i++){
       if(hui[i]!=wen[i]){
           console.log('不是回文')
           return 
       }else{
           console.log('是回文')
       }
   }
}

var str=new Deque();
str.enqueue('a',1)
str.enqueue('b',1)
str.enqueue('c',1)
str.enqueue('a',2)
str.enqueue('b',2)
str.enqueue('c',2)
console.log(str.dataStore)
panduan(str)