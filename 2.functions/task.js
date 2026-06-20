function getArrayParams(...arr) {
  let min = Infinity,
      max = -Infinity,
      sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  let avg = sum / arr.length;
  avg = +avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  let { min, max } = getArrayParams(...arr);

  if (arr.length === 0) {
    return 0;
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let evenSum = 0,
      oddSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }

  if (arr.length === 0) {
    return 0;
  }

  return evenSum - oddSum;
}

function averageEvenElementsWorker(...arr) {
  let evenElements = [],
      oddElements = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenElements.push(arr[i]);
    } else {
      oddElements.push(arr[i]);
    }
  }

  if (evenElements.length === 0) {
    return 0;
  }

  let sum = evenElements.reduce((acc, val) => acc + val, 0);
  let avg = sum / evenElements.length;
  return +avg.toFixed(2);
}

function makeWork (arrOfArr, func) {
  let MaxWorkerResult = -Infinity;
  const results = [];

  for (let arr of arrOfArr) {
      const result = func(...arr);

      results.push(result);
      if (result > MaxWorkerResult) {
        MaxWorkerResult = result;
      }
    }

  return MaxWorkerResult;
}