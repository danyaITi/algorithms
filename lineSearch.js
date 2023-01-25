// сложность: O(n)

const array = [1,4,5,6,3,9,7,8,2,10]
function test(array,item){
    for (let i = 0; i < array.length; i++) {
        if(item === array[i]){
            return i
        }
        
    }
    return null

}
console.log(test(array,4))