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

// var arr=[5,7,2,9,3,8,4,7,1];
// // 每次选择最左边的数作为基数
// function quickSort(arr){
//     if (arr.length<2) { return arr; }
//     // 定义左指针
//     var left=0;
//     // 定义右指针
//     var right=arr.length-1;
//     //开启每一轮的排序
//     while(left<right){
//         // 寻找右边比arr[0]小的数的下标
//         while(arr[right]>=arr[0] && left<right){
//             right=right-1;
//         }
//         // 寻找左边比arr[0]大的数的下标
//         while(arr[left]<=arr[0] && left<right){
//             left++;
//         }
//         //当左边指针与右边指针相遇后，交换arr[0]与当前两个指针所在的元素
//         if (right==left) {
//             let mid=arr[right];
//             arr[right]=arr[0];
//             arr[0]=mid;
//             break;
//         }
//         // 当左指针小于右指针的位置，交换两个指针当前位置的元素
//         let tem=arr[right];
//         arr[right]=arr[left];
//         arr[left]=tem;
//     }
//     //递归实现
//     return quickSort(arr.slice(0,left)).concat(arr.slice(left,right+1)).concat(quickSort(arr.slice(right+1)));
// }
// //对数组进行排序
// console.log(quickSort(arr));
// 原地快排
function quickSort(arr,left = 0,right = arr.length-1) {
    let partitionIndex;
    if (left < right){
        partitionIndex = partition(arr,left,right);
        quickSort(arr,left,partitionIndex - 1);
        quickSort(arr,partitionIndex + 1,right);
    }
    return arr
}
function partition(arr,left,right) {
    // let pivot = left; // 基准值，这里选取的是最左边的
    let pivot = Math.floor(Math.random() * (right - left)) + left;
    // console.log(pivot);
    [arr[pivot],arr[left]] = [arr[left],arr[pivot]];

    while(left < right){
        // 先从右边开始找到小于基准值的数，再从左边找到大于基准值的数
        while(arr[right] >= arr[pivot] && left<right){
            right--;
        }
        while(arr[left] <= arr[pivot] && left<right){
            left++;
        }
        // 如果left 和 right 指针重叠，则交换改指针和基准值
        if(left === right){
            [arr[pivot],arr[left]] = [arr[left],arr[pivot]]
        }else{
            [arr[right],arr[left]] = [arr[left],arr[right]]
        }
    }
    // [arr[pivot],arr[index-1]] = [arr[index -1],arr[pivot]];
    return left;
}
console.log(quickSort([5,3,6,1,2,8]));

// 参考资料：https://blog.csdn.net/insistGoGo/article/details/7785038
// https://segmentfault.com/a/1190000014406198?tdsourcetag=s_pctim_aiomsg

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








