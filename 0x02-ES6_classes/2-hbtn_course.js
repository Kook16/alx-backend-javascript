export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with validation
  set name(val) {
    if (typeof val === 'string') {
      this._name = val;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length with validation
  set length(val) {
    if (typeof val === 'number') {
      this._length = val;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students with validation
  set students(val) {
    if (Array.isArray(val) && val.every(student => typeof student === 'string')) {
      this._students = val;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
