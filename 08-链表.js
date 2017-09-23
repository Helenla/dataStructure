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