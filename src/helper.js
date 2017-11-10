
var swapArrayElements = function(arr, indexA, indexB) {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  }

Array.prototype.swap = function(indexA, indexB) {
    swapArrayElements(this, indexA, indexB);
 };