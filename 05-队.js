function Queue(){
    this.dataStore=[]
    this.enqueue=enqueue
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
//进队
function enqueue(element){
    this.dataStore.push(element)
}
//出队
function dequeue(){
    return this.dataStore.shift()
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
        reStr+=this.dataStore[i]+'\n'
    }
    return reStr
}
//数组是否为空
function empty(){
    if(this.dataStore.length=0){
        return true;
    }else{
        return false;
    }
}