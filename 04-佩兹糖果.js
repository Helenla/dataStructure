//栈
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

var sweetBox=new stack()
sweetBox.push('red');
sweetBox.push('yellow');
sweetBox.push('red');
sweetBox.push('yellow');
sweetBox.push('white');
sweetBox.push('yellow');
sweetBox.push('white');
sweetBox.push('red');
sweetBox.push('yellow');
sweetBox.push('white');

function getColor(element,Stack){
    var getColorStack=new stack()
    var setColorStack=new stack()
    while(Stack.length()>0){
        if(Stack.peek()==element){
            getColorStack.push(element)
            Stack.pop()
        }else{
            setColorStack.push(Stack.peek())
            Stack.pop()
        }
    }
    while(setColorStack.length()>0){
        Stack.push(setColorStack.peek())
        setColorStack.pop()
    }
    console.log(Stack)
}
getColor('red',sweetBox)