// сложность: O (log (n))
// элементов в массиве: 16
// за 4 иттерации можно найти любой элемент в массиве

const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let count = 0
function test(array,item){
    let start = 0
    let end = array.length
    let middle
    let found = false
    while(found === false && start <= end){
        count++
        middle = Math.floor((start+end)/2)
        if(item === array[middle]){
            found = true
            return middle
        }
        if(item<array[middle]){
            end = middle -1
        } else{
            start = middle + 1
        }

    }
    return null    
}
console.log(test(array,10))
console.log(count)