# Union type in typescript.

### Union types store variables of multiple types and give us the flexibility to write code without error in our project.

## Usage

- When we store different value then we use this.
- Using store multiple types.
- Using in optional parameter.
- Handling multiple things and types.

## Examples

```TypeScript
type Delivery = "pending" | "out for Delivery" | "Delivered";
function deliveryStatus(status: Delivery) {
    console.log(`Delivery status: ${status}`);
}
```

# Intersection types in Typescript.

### Intersection store multiple type combined into one. This store you to create complex type to maintain your code writing. It's use where we need to maintain various type of object and property.

## Usage

- Flexibility in functional parameter.
- Multiple properties with multiple types.
- Complex data make structured.
- Write complex code without any error.

## Examples

```TypeScript
 interface Rectangle {
    shape: "rectangle";
    width: number;
    height: number;
}

function calculateShapeArea(shape: Rectangle): number {
    const result: number = shape.height * shape.width;
    return result;
}

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});

console.log(rectangleArea);

```
