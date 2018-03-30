//复杂度为O(n^2)

function bubble(arr) {
    console.time('bubble');
    if (arr && arr instanceof Array) {
        var length = arr.length;
        for(let i = 0;i<length;i++){
            //把最大数冒泡到末尾
            for(let j = 0;j<length-i;j++){
                //当左边大于右边，则两数交换
                if (arr[j] > arr[j+1]) {
                    // let a = arr[j];
                    // arr[j] = arr[j+1];
                    // arr[j+1] = a;
                    //es6对象的解构赋值
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                }
            }
        }
        console.log(arr);
    }
    else{
        console.log('请输入合法字符串！');
    }
    console.timeEnd('bubble');
}



//优化
//我们可以注意到，如果是[2,1,3,4,5,6,7]这样一个趋于有序的数组
// 当第一次冒泡后，数组变为[1,2,3,4,5,6,7],已经有序
// 此时显然不必再继续冒泡

function bubbleBetter(arr) {
    console.time('bubbleBetter');
    if (arr && arr instanceof Array) {
        var length = arr.length;
        var flag = true;    //设立标志位
        //若flag为false则退出循环
        for(let i = 0;i<length && flag ;i++){
            flag = false;
            //把最大数冒泡到末尾
            //内层for循环执行完后,如果没有出现要交换的数，表示数组已经有序
            for(let j = 0;j<length-i;j++){
                //当左边大于右边，则两数交换
                if (arr[j] > arr[j+1]) {
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                    flag = true;
                }
            }
        }
        console.log(arr);

    }
    else{
        console.log('请输入合法字符串！');
    }
    console.timeEnd('bubbleBetter');
}

bubble([2,1,3,4,5,6,7]);
bubbleBetter([2,1,3,4,5,6,7]);
