function Node(element){
    this.element=element;
    this.next=null
}
function Llist() {
    this.head=new Node("head")
    this.find=find
    this.findProvius=findPrevious
    this.insert=insert
    this.remove=remove
    this.display=display
}
function remove(item){
    var prevNode=this.findPrevious(item)
    if(!prevNode.next==null){
        prevNode.next=prevNode.next.next
    }
}
function findPrevious(item){
    var currNode=this.head
    while(!(currNode.next==null)&&(currNode.next.element!=item)){
        currNode=currNode.next
    }
    return currNode
}
function display(){
    var currNode=this.head
    while(!(currNode.next==null)){
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
function findLast(){
    var currNode=this.head
    while(currNode.next!=null){
        currNode=currNode.next
    }
    return currNode
}

//主程
var grade=new Llist()
grade.insert('100','head')
grade.insert('99','100')
grade.insert('88','99')
grade.insert('77','88')
grade.display()



