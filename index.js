function fibonachi(n){
    const arr = [];
    for(let i = 0; i < n; i++){
        if(i < 2){
            arr.push(1);
        } else {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        }
    }
    return arr;
}

console.log(fibonachi(8)); //для проверки в терминале node index.js
export default fibonachi;
