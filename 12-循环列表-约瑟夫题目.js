/*传说在公元 1 世纪的犹太战争中，犹太历史学家弗拉维奥·约瑟夫斯和他的 40 个同胞
被罗马士兵包围。犹太士兵决定宁可自杀也不做俘虏，于是商量出了一个自杀方案。他
们围成一个圈，从一个人开始，数到第三个人时将第三个人杀死，然后再数，直到杀光
所有人。约瑟夫和另外一个人决定不参加这个疯狂的游戏，他们快速地计算出了两个位
置，站在那里得以幸存。写一段程序将 n 个人围成一圈，并且第 m 个人会被杀掉，计算
一圈人中哪两个人最后会存活。使用循环链表解决该问题。*/
function Node(element){
    this.element=element;
    this.next=null
}
function Llist() {
    this.head=new Node("head")
    this.head.next=this.head
    this.find=find
    this.findProvius=findPrevious
    this.insert=insert
    this.remove=remove
    this.display=display
    this.currentNode=this.head
    this.count=count
    this.advance=advance
}
function remove(item){
    var prevNode=this.findPrevious(item)
    if(!prevNode.next=="head"){
        prevNode.next=prevNode.next.next
    }
}
function findPrevious(item){
    var currNode=this.head
    while((currNode.next.element!="head")&&(currNode.next.element!=item)){
        currNode=currNode.next
    }
    return currNode
}
function display(){
    var currNode=this.head
    while((currNode.next!=null)&&(currNode.next.element!="head")){
        currNode=currNode.next
        console.log(currNode)
    }
    return currNode
}
function find(item){
    var currNode=this.head
    while(currNode.element!=item){
        currNode=currNode.next
    }
    return currNode
}
function insert(newElement,item){
    var newNode=new Node(newElement);
    var current=this.find(item)
    newNode.next=current.next
    current.next=newNode
}
function count(){
    var currNode=this.head
    var i=0;
    while(currNode.next!='head'){
        currNode=currNode.next
        i++
    }
    console.log(i)
    return i;
}
function advance(m){
    while(n>0){
        if(this.currentNode.next.element=='head'){
            currentNode=this.currentNode.next.next
        }else{
            currentNode=this.currentNode.next
        }
        n--
    }
}


//主程
var person=new Llist();
person.insert('1','head');
person.insert('2', '1');
person.insert('3', '2');
person.insert('4' , '3');
person.insert('5' , '4');
person.insert('6' , '5');
person.insert('7' , '6');
person.insert('8' , '7');
person.insert('9' , '8');
person.insert('10' , '9');

person.display()
document.write('<br>')

var n=3;
while(person.count()>2){
    person.advance(n)
    person.remove(person.currentNode.element)
    person.display()
    document.write('<br>')
}
