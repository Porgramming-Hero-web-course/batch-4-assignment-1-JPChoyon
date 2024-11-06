{
  //

  // Sample Input:
  const removeDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5];

  // function for remove duplicate number
  function newArray(arr: number[]): number[] {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  // output for new array [without any duplicate number]
  console.log(newArray(removeDuplicates));

  //
}
