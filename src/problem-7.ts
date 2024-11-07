{
  //
  class Car {
    constructor(
      public name: string,
      public model: string,
      public year: number
    ) {}
    getCarAge() {
      const age = 2024 - this.year;
      console.log(age);
    }
  }
  // Sample Input 1:
  const car = new Car("Honda", "Civic", 2018);
  car.getCarAge();

  //
}