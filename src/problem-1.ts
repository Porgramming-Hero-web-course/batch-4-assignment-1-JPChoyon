{
  //

  //number array input
  const sumArray: number[] = [1, 2, 3, 4, 5];

  // initial value and store value
  let sum: number = 0;

  // forEach method for calculate all the array of number
  sumArray.forEach((num: number): number => {
    return (sum += num);
  });

  // output for sum of array
  console.log(sum);

  //
}
