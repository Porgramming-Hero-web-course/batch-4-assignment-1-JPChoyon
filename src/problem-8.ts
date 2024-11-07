{
  //
  type Person = {
    name: string;
    age: number;
    email: string;
  };

  function validateKeys<T extends Person>(obj: T, keys: (keyof T)[]): boolean {
    return keys.map((key) => key in obj).every(Boolean);
  }

  // Sample Input:
  const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));

  //
}
