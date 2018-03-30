/*
* @Author: wrma
* @Date: 2018/3/26
* @Last Modified by:   wrma
* @Last Modified time: 10:36
*/
//复杂度为O(n^2)
// function selectSort(arr) {
//     let length = arr.length;
//     for (let i = 0;i<length-1;i++){
//         let temp = arr[i];
//         let min = temp,minj = i;
//         for(let j = i+1;j<length;j++){
//             if (arr[j]<min){
//                 min = arr[j];
//                 minj = j;
//             }
//         }
//         [arr[i],arr[minj]] = [min,temp];
//     }
//     return arr;
// }
function selectSort(arr) {
    let length = arr.length;
    for (let i = 0;i<length-1;i++){
        for(let j = i+1;j<length;j++) {
            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}
console.log(selectSort([6,4,0,9,8,2,6,3]));