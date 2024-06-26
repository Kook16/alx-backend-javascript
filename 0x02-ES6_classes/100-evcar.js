import Car, { cloneSymbol } from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  [cloneSymbol]() {
    return new Car();
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
