{
  //
  type Person = {
    name: string;
    age: number;
  };

  // function for check property in the object
  const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  // Sample Input:
  const person: Person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));

  //
}
