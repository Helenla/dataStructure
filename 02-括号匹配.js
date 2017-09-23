function pipei(str){
    str=str.split('')
    var len=str.length
    for(var i=0;i<len;i++){
        if(str[i]=='('){
            console.log('( : '+i)
        }
        if(str[i]==')'){
            console.log(') : '+i)
        }
    }
}
pipei('2.3+23/12+(3.14159×0.24')