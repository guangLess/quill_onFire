



//export each var and require {var}
//anything that is not export default use { } 


export const shuffle = (a) => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
}


//Helper methods
export const swapArrayElements = (arr, indexA, indexB) => {
  var temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}

export const formatArrayToObj = (array) => {
return array.reduce((collect, curr, index) => {
    let obj = { baseIndex: index,
                 part: curr
                  }
     collect.push(obj) //[index, curr]
     return collect
}, [])
}