/*
* @Author: wrma
* @Date: 2018/3/27
* @Last Modified by:   wrma
* @Last Modified time: 18:17
*/
//  希尔排序的特点在于他设定了间隔，通过对间隔后的数组进行插入排序
// 使整个数组达到基本有序的状态后，再进行插入排序，复杂度就会小很多
function shellSort(arr) {
    let step = parseInt(arr.length/2);
    while (step){
        //假设第一个数已经排好
        for (let i = step;i<arr.length;i++){
            //将当前数保存起来
            let temp = arr[i];
            let j = i;
            for (; j > 0 ; j-=step){
                //若左边的数大于当前数，则将左边数向右移一位
                if (arr[j - step] > temp){
                    arr[j] = arr[j - step];
                }
                //否则就跳出，保留当前的j值
                else {
                    break;
                }
            }
            //当左边数小于当前数时，将当前数赋给arr[j]
            arr[j] = temp;
        }
        step=parseInt(step/2);
    }
    return arr;
}
console.log(shellSort([9,2,7,5,1,3,4]));

