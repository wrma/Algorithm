/*
* @Author: wrma
* @Date: 2018/3/26
* @Last Modified by:   wrma
* @Last Modified time: 17:10
*/
//复杂度为O(nlogn)
function insertionSort(arr) {
    let length = arr.length;
    //假设第一个数已排好
    for (let i = 1;i<length;i++){
        //将当前数保存起来
        let temp = arr[i];
        let j = i;
        for (; j > 0 ; j--){
            //若左边的数大于当前数，则将左边数向右移一位
            if (arr[j - 1] > temp){
                arr[j] = arr[j - 1];
            }
            //否则就跳出，保留当前的j值
            else {
                break;
            }
        }
        //当左边数小于当前数时，将当前数赋给arr[j]
        arr[j] = temp;
    }
    return arr;
}
console.log(insertionSort([6,2,4,8,1,5]));