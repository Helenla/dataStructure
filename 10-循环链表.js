function Node(element){
    this.element=element;
    this.next=null
}
//创建链表
function Llist() {
    this.head=new Node("head")
    this.head.next=this.head
    this.find=find
    this.findProvius=findPrevious
    this.insert=insert
    this.remove=remove
    this.display=display
}
//移除
function remove(item){
    var prevNode=this.findPrevious(item)
    if(!prevNode.next=="head"){
        prevNode.next=prevNode.next.next
    }
}
//找到item上一个
function findPrevious(item){
    var currNode=this.head
    while((currNode.next.element!="head")&&(currNode.next.element!=item)){
        currNode=currNode.next
    }
    return currNode
}
//显示链表
function display(){
    var currNode=this.head
    while((currNode.next!=null)&&(currNode.next.element!="head")){
        currNode=currNode.next
    }
    return currNode
}
//找到item
function find(item){
    var currNode=this.head
    while(currNode.element!=item){
        currNode=currNode.next
    }
    return currNode
}
//插入
function insert(newElement,item){
    var newNode=new Node(newElement);
    var current=this.find(item)
    newNode.next=current.next
    current.next=newNode
}
//显示最后一个
function findLast(){
    var currNode=this.head
    while(currNode.next!="head"){
        currNode=currNode.next
    }
    return currNode
}