/*
* @Author: wrma
* @Date: 2018/3/26
* @Last Modified by:   wrma
* @Last Modified time: 15:35
*/
//复杂度为O(nlogn)
function heapSort(arr) {
    let length = arr.length;
    //从最后一个非叶子结点开始，构建大顶堆
    for(let i = length/2-1;i>=0;i--){
        adjustHeap(arr,i,length);
    }
    for(let j = length-1 ;j>0;j--){
        //交换堆顶元素和末尾元素
        [arr[0],arr[j]] = [arr[j],arr[0]];
        adjustHeap(arr,0,j);
    }
    return arr;
}
function adjustHeap(arr,i,length) {
    //获取当前子节点
    let temp = arr[i];
    //从i结点的左子节点开始
    let k = i*2+1;
    while(k < length){
        //如果左子节点小于右子节点
        if(k+1 < length && arr[k] < arr[k+1]){
            k++;
        }
        //如果子节点大于父节点，则将子节点值赋给父节点，并将当前结点定位到子节点上
        if (arr[k] > temp){
            arr[i] = arr[k];
            i = k;
            k = i*2+1;
        }
        else{
            break;
        }
    }
    arr[i] = temp;
}
console.log(heapSort([2,5,1,7,3,4]));