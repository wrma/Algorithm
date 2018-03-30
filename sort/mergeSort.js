/*
* @Author: wrma
* @Date: 2018/3/27
* @Last Modified by:   wrma
* @Last Modified time: 16:09
*/
//归并部分，传入左右两个数组进行比较归并
function merge(left,right) {
    let result = [];
    //当左右两个数组都有值时，对比两边第一个元素大小，将小的值删除同时push到result数组里
    //由于每次比较过后都会将第一个数删除，所以每次比较第一个数都相当于是将下标向后移一位
    while(left.length && right.length){
        if(left[0]>right[0]){
            result.push(right.shift());
        }
        else{
            result.push(left.shift());
        }
    }
    //经过上面一次循环，只有左子列或右子列不为空，或二者都为空，将剩下的数push进result里
    while(left.length){
        result.push(left.shift());
    }
    while (right.length){
        result.push(right.shift());
    }
    return result;
}
function mergeSort(arr) {
    let length = arr.length;
    let middle = parseInt(length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    if (length === 1){
        return arr;
    }else{
        return merge(mergeSort(left),mergeSort(right));
    }
}
console.log(mergeSort([2,9,6,5,8,4]));
