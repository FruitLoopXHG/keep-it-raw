function DepCopy(arrOrObj) {
    if( typeof arrOrObj !== 'object' && !Array.isArray(arrOrObj) ){
        return console.log("not array");
    }else{
        if(Array.isArray(arrOrObj)){
            let newArr = []
            for (let i = 0; i < arrOrObj.length; i++) {
                if(!arrOrObj[i]){
                    continue
                }else if(typeof arrOrObj[i] == 'object' || Array.isArray(arrOrObj[i])){
                   newArr.push(copy(arrOrObj[i]))
                }else{
                    newArr.push(arrOrObj[i])
                }   
            }
            return newArr
        }else{
            let newObj = {}
            for(let i in arrOrObj){
                if (typeof arrOrObj[i] === "object" || Array.isArray(arrOrObj[i])) {
                    newObj[i]  = copy(arrOrObj[i])
                }else{
                    newObj[i] = arrOrObj[i]
                }
            }
            return newObj
        }
    }
}




export default{
    DepCopy
}