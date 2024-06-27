export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location
  }

  // Custom string casting
  toString() {
    return this._location;
  }

  // Custom number casting
  valueOf() {
    return this._size;
  }
}
