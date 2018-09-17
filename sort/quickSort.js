/*
* @Author: wrma
* @Date: 2018/3/25
* @Last Modified by: wrma
* @Last Modified time: 17:52
*/
//复杂度为O(nlogn)
// 非原地快排（阮一峰版快排）
// function quickSort(arr) {
//     let length = arr.length;
//     let right = [],left = [];
//     //轴心值取第一个数
//     let temp = arr[0];
//     //递归终止条件
//     if (length <= 1){
//         return arr;
//     }
//     for(let i = 1;i<length;i++){
//         //大于轴心值的数放到右边数组中，小于的放在左边数组中
//         if (arr[i] < temp){
//             left.push(arr[i]);
//         }
//         else{
//             right.push(arr[i]);
//         }
//     }
//     //进行递归调用，并将左边数组与轴心值和右边数组链接起来
//     return quickSort(left).concat([temp],quickSort(right));
// }
//
// console.log(quickSort([5,3,6,1,8]));

// 原地快排
function quickSort(arr,left,right) {
    let len = arr.length;
    let partitionIndex;
    left = typeof left !== 'number' ? 0 : left;
    right = typeof right !== 'number' ? len - 1 : right;
    if (left < right){
        partitionIndex = partition(arr,left,right);
        quickSort(arr,left,partitionIndex - 1);
        quickSort(arr,partitionIndex + 1,right);
    }
    return arr
}
function partition(arr,left,right) {
    let pivot = left;
    let index = pivot + 1;
    for (let i = index;i <= right;i++){
        console.log(arr)
        if (arr[i] < arr[pivot]){
            [arr[index],arr[i]] = [arr[i],arr[index]];
            index ++;
        }
    }
    [arr[pivot],arr[index-1]] = [arr[index -1],arr[pivot]];
    return index - 1;
}
console.log(quickSort([5,3,6,1,2,8]));

//递归思想
//1.有终止条件
//2.自身调用自身

// function add(num) {
//     var sum;
//     if(num <= 0){
//         return 0;
//     }
//     else{
//         sum = num + add(--num);
//         return sum;
//     }
// }
// console.log(add(10));

//1 2 3 5 8 ...
// function fibonacci(n) {
//     if (n == 1 || n == 2) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(5));

// function multiply(n) {
//     if(n = 1){
//         return 1;
//     }
//     else{
//         return n*multiply(n-1);
//     }
// }
// console.log(multiply(5));








