// To refactor later



// function miniMaxSum(arr) {
//     // Write your code here
  
//     let minMax = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (i == 0) {
//         let sum = 0;
//         for (let j = i + 1; j < arr.length; j++) {
//           sum += arr[j];
//         }
//         minMax.push(sum);
//       }
//       if (i == 1) {
//         let sum = 0;
//         for (let j = i + 1; j < arr.length; j++) {
//           sum += arr[j];
//         }
//         for (let k = i - 1; k < i; k++) {
//           sum += arr[k];
//         }
//         minMax.push(sum);
//       }
//       if (i == 2) {
//         let sum = 0;
//         for (let j = i + 1; j < arr.length; j++) {
//           sum += arr[j];
//         }
//         for (let k = i - 2; k < i; k++) {
//           sum += arr[k];
//         }
//         minMax.push(sum);
//       }
//       if (i == 3) {
//         let sum = 0;
//         for (let j = i + 1; j < arr.length; j++) {
//           sum += arr[j];
//         }
//         for (let k = i - 3; k < i; k++) {
//           sum += arr[k];
//         }
//         minMax.push(sum);
//       }
//       if (i == 4) {
//         let sum = 0;
//         for (let j = i + 1; j < arr.length; j++) {
//           sum += arr[j];
//         }
//         for (let k = i - 4; k < i; k++) {
//           sum += arr[k];
//         }
//         minMax.push(sum);
//       }
      
//     }
//     console.log(Math.max(...minMax), Math.min(...minMax));
//   }
  
//   miniMaxSum(arr2);
  