function selectionSort(str){
    var min,temp,len=str.length
    for(let outer=0;outer<len;outer++){
        min=outer
        for(let inner=min+1;inner<len;inner++){
            if(str[inner]<str[min]){
                temp=str[min]
                str[min]=str[inner]
                str[inner]=temp
            }
        }
    }
    console.log(str)
} 
selectionSort([5,3,2,1,4,6,7,3,4,5,0])