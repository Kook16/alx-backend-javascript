import { string } from "yargs";

export default class Currency {
  constructor(code , name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }
  set name(val) {
    if (typeof val === String) {
      this._name = val
    } else {
      throw new TypeError('name must be a strings');
    }
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val === String) {
      this._code = val
    } else {
      throw new TypeError('code must be a strings');
    }
  }

  displayFullCurrency () {
    return `${this.name} (${this.code})`
  }
}