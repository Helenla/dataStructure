//本程序谁的code小，谁优先
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
    var priority=this.dataStore[0].code
    for(var i=0;i<this.dataStore.length;i++){
        if(this.dataStore[i].code<priority){
            priority=i
        }
    }
    return this.dataStore.splice(priority,1)
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
        reStr+=this.dataStore[i]+' code: '+this.dataStore[i].code+'\n'
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
//创建队列
function Patient(name,code){
    this.name=name;
    this.code=code;
}
var p = new Patient("Smith",5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);

print(ed.toString())


var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());

// 下一轮
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());

var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());
// 程序输出如下：
// Smith code: 5
// Jones code: 4
// Fehrenbach code: 6
// Brown code: 1
// Ingram code: 1

// Patient being treated: Jones
// Patients waiting to be seen:
// Smith code: 5
// Fehrenbach code: 6
// Brown code: 1
// Ingram code: 1

// Patient being treated: Ingram
// Patients waiting to be seen:
// Smith code: 5
// Fehrenbach code: 6
// Brown code: 1

// Patient being treated: Brown
// Patients waiting to be seen:
// Smith code: 5
// Fehrenbach code: 6