{
  //

  // make shape type
  interface Circle {
    shape: "circle";
    radius: number;
  }

  interface Rectangle {
    shape: "rectangle";
    width: number;
    height: number;
  }

  // make union type as shown on question
  type Shape = Circle | Rectangle;

  // function for calculate are
  function calculateShapeArea(shape: Shape) {
    if (shape.shape === "circle") {
      const result: number = Math.PI * (shape.radius * shape.radius);
      return parseFloat(result.toFixed(2)); //making output like question ans
    } else if (shape.shape === "rectangle") {
      const result: number = shape.height * shape.width;
      return result;
    } else {
      return console.log(
        "you entered wrong shape. Please use circle and rectangle shape."
      );
    }
  }

  // Sample Input 1:
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);

  // Sample Input 2:
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea);

  //
}
