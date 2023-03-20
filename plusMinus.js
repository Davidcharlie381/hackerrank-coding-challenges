function plusMinus(arr) {
    // Write your code here
    let length = arr.length;
    let pos = 0;
    let neg = 0;
    let zer = 0;
    for (let i = 0; i < length; i++) {
      if (arr[i] < 0) {
        neg += 1;
      } else if (arr[i] > 0) {
        pos += 1;
      } else {
        zer += 1;
      }
    }
    console.log((pos / length).toFixed(6));
    console.log((neg / length).toFixed(6));
    console.log((zer / length).toFixed(6));
  }

plusMinus([1, 1, 0, -1, -1]);