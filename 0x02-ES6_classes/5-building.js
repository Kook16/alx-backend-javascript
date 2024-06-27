export default class Building {
  constructor(sqft) {
    // if (new.target === Building) {
    //   throw new TypeError("Cannot construct Building instances directly");
    // }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (typeof val === 'number') {
      this._sqft = val;
    } else {
      throw new TypeError('sqft must be a number');
    }
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
